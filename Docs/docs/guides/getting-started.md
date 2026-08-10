# HLD531_VRChat_Avatar_Generator.py
# Blender 3.x/4.x
# Erstellt einen stylisierten VRChat-Avatar als Ausgangspunkt:
# - lange rotbraune Haare
# - schwarze Jacke + schwarzes Top
# - Jeansrock + Netzstrümpfe
# - schwarze Boots + kleine Umhängetasche
# - Kopf/Gesicht schaut ca. 25° nach LINKS
#
# WICHTIG:
# Das Ergebnis ist ein Blender-Ausgangsmodell, kein bereits hochgeladenes
# VRChat-Avatarpaket. Für VRChat muss das Modell anschließend in Unity
# mit dem VRChat SDK als Humanoid eingerichtet und hochgeladen werden.

import bpy
import math
from mathutils import Vector

# ---------- Clean scene ----------
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# ---------- Materials ----------
def mat(name, color, metallic=0.0, roughness=0.5):
    m = bpy.data.materials.new(name)
    m.diffuse_color = (*color, 1.0)
    m.metallic = metallic
    m.roughness = roughness
    return m

SKIN   = mat("Skin", (0.92, 0.62, 0.52), 0, 0.42)
HAIR   = mat("Long_Auburn_Hair", (0.42, 0.16, 0.055), 0, 0.4)
BLACK  = mat("Black_Leather", (0.025, 0.025, 0.03), 0.15, 0.25)
TOP    = mat("Black_Top", (0.015, 0.015, 0.02), 0, 0.5)
DENIM  = mat("Blue_Denim", (0.08, 0.25, 0.52), 0, 0.65)
WHITE  = mat("White", (0.95, 0.95, 0.98), 0, 0.4)
LIP    = mat("Lips", (0.65, 0.08, 0.18), 0, 0.35)
EYE    = mat("Iris_Blue", (0.08, 0.55, 0.9), 0, 0.2)
BAG    = mat("Bag", (0.035, 0.035, 0.04), 0.25, 0.22)
GOLD   = mat("Gold", (0.7, 0.48, 0.08), 0.7, 0.2)
PINK   = mat("Ribbon_BluePink", (0.18, 0.45, 0.85), 0, 0.35)
FISH   = mat("Fishnet", (0.03, 0.03, 0.035), 0, 0.55)

# ---------- Helpers ----------
def uv(name, loc, scale, material, segments=32, rings=16):
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=segments, ring_count=rings, location=loc
    )
    o = bpy.context.object
    o.name = name
    o.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    return o

def cube(name, loc, scale, material, bevel=0.08, rot=(0,0,0)):
    bpy.ops.mesh.primitive_cube_add(location=loc, rotation=rot)
    o = bpy.context.object
    o.name = name
    o.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if bevel:
        mod = o.modifiers.new("Soft_Edges", "BEVEL")
        mod.width = bevel
        mod.segments = 3
    o.data.materials.append(material)
    return o

def cyl(name, loc, radius, depth, material, rot=(0,0,0), vertices=32):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=vertices, radius=radius, depth=depth,
        location=loc, rotation=rot
    )
    o = bpy.context.object
    o.name = name
    o.data.materials.append(material)
    bpy.ops.object.shade_smooth()
    return o

def curve_tube(name, points, bevel, material):
    cu = bpy.data.curves.new(name, "CURVE")
    cu.dimensions = "3D"
    cu.bevel_depth = bevel
    cu.bevel_resolution = 3
    sp = cu.splines.new("BEZIER")
    sp.bezier_points.add(len(points)-1)
    for bp, p in zip(sp.bezier_points, points):
        bp.co = p
        bp.handle_left_type = "AUTO"
        bp.handle_right_type = "AUTO"
    o = bpy.data.objects.new(name, cu)
    bpy.context.collection.objects.link(o)
    o.data.materials.append(material)
    return o

# ---------- Body ----------
# Feet / boots
for x in (-0.32, 0.32):
    cyl("Boot", (x, 0, 0.42), 0.22, 0.75, BLACK)
    cube("Boot_Sole", (x, -0.035, 0.05), (0.25, 0.30, 0.07), BLACK, 0.04)
    for z in (0.30, 0.48, 0.66):
        curve_tube(
            "Boot_Lace",
            [(x-0.13, -0.23, z), (x, -0.27, z+0.02), (x+0.13, -0.23, z)],
            0.012, WHITE
        )

# Legs
for x in (-0.32, 0.32):
    cyl("Leg", (x, 0, 1.25), 0.13, 1.05, SKIN)

# Fishnet decorative bands (simple visual approximation)
for x in (-0.32, 0.32):
    for z in (0.95, 1.15, 1.35, 1.55):
        curve_tube("FishnetBand", [(x-0.11, -0.125, z), (x+0.11, -0.125, z)], 0.009, FISH)

# Skirt
cyl("Denim_Skirt", (0, 0, 1.75), 0.58, 0.45, DENIM, vertices=48)
# white underskirt edge
cyl("White_Skirt_Edge", (0, -0.005, 1.55), 0.60, 0.08, WHITE, vertices=48)

# Waist / torso
cyl("Waist", (0, 0, 2.10), 0.34, 0.28, SKIN)
cube("Black_Top", (0, 0, 2.43), (0.36, 0.22, 0.38), TOP, 0.08)
cube("Leather_Jacket", (0, 0, 2.55), (0.47, 0.27, 0.48), BLACK, 0.10)

# Arms
for x, s in ((-0.58, -1), (0.58, 1)):
    cyl("UpperArm", (x, 0, 2.48), 0.12, 0.68, SKIN, rot=(0, math.radians(8*s), 0))
    cyl("JacketSleeve", (x, 0, 2.48), 0.145, 0.68, BLACK, rot=(0, math.radians(8*s), 0))
    uv("Hand", (x, -0.01, 2.05), (0.12, 0.08, 0.16), SKIN)

# Neck
cyl("Neck", (0, 0, 2.95), 0.13, 0.22, SKIN)

# ---------- Head: looking LEFT ----------
# In Blender front is -Y. Positive Z is up.
head = uv("Head_LOOKING_LEFT", (0, -0.01, 3.30), (0.42, 0.36, 0.48), SKIN)
head.rotation_euler[2] = math.radians(-25)  # Kopf ca. 25° nach links

# Hair mass
hair = uv("Hair_Main", (0, 0.05, 3.42), (0.50, 0.40, 0.72), HAIR)
hair.rotation_euler[2] = math.radians(-25)

# Long hair strands down the back/sides
for side in (-1, 1):
    pts = [
        (side*0.32, 0.12, 3.55),
        (side*0.55, 0.10, 3.10),
        (side*0.60, 0.12, 2.45),
        (side*0.50, 0.10, 1.95),
    ]
    curve_tube("Long_Hair_Strand", pts, 0.13, HAIR)

# Bangs
for i, x in enumerate((-0.28, -0.12, 0.05, 0.22)):
    curve_tube(
        f"Bangs_{i}",
        [(x, -0.30, 3.66), (x*0.8, -0.34, 3.48), (x*0.55, -0.28, 3.28)],
        0.09, HAIR
    )

# Eyes positioned on front and turned with head
angle = math.radians(-25)
def rot_point(x, y, z):
    ca, sa = math.cos(angle), math.sin(angle)
    return (x*ca - y*sa, x*sa + y*ca, z)

for x in (-0.16, 0.16):
    px, py, pz = rot_point(x, -0.34, 3.37)
    uv("Eye", (px, py, pz), (0.075, 0.035, 0.10), WHITE)
    px2, py2, pz2 = rot_point(x, -0.37, 3.37)
    uv("Blue_Iris", (px2, py2, pz2), (0.035, 0.018, 0.055), EYE)

# Mouth
mx, my, mz = rot_point(0, -0.355, 3.15)
curve_tube("Mouth", [(mx-0.10, my, mz), (mx, my-0.015, mz-0.015), (mx+0.10, my, mz)], 0.018, LIP)

# Earrings
for x in (-0.38, 0.38):
    px, py, pz = rot_point(x, -0.02, 3.20)
    uv("Earring", (px, py, pz), (0.035,0.035,0.05), GOLD)

# Blue hair ribbons
for x in (-0.45, 0.45):
    px, py, pz = rot_point(x, 0.05, 3.60)
    curve_tube("Hair_Ribbon", [(px,py,pz),(px*1.15,py-0.02,pz-0.25),(px*1.05,py,pz-0.45)], 0.025, PINK)

# Necklace
curve_tube("Necklace", [(-0.18,-0.28,2.99),(0,-0.34,2.90),(0.18,-0.28,2.99)], 0.012, WHITE)
uv("Necklace_Pendant", (0,-0.35,2.88), (0.045,0.025,0.055), GOLD)

# Belt
curve_tube("Belt", [(-0.40,-0.23,2.18),(0,-0.31,2.18),(0.40,-0.23,2.18)], 0.035, BLACK)
cube("Belt_Buckle", (0,-0.34,2.18), (0.075,0.025,0.075), GOLD, 0.015)

# Crossbody bag
cube("Crossbody_Bag", (0.42,-0.38,2.25), (0.19,0.06,0.17), BAG, 0.04)
curve_tube("Bag_Strap", [(-0.28,-0.30,2.78),(0.05,-0.40,2.52),(0.42,-0.38,2.30)], 0.025, BLACK)

# ---------- Simple facial shape keys ----------
# Shape keys are added to the head so later facial rigging can be connected.
bpy.context.view_layer.objects.active = head
head.select_set(True)
try:
    head.shape_key_add(name="Basis")
    smile = head.shape_key_add(name="Smile")
    smile.value = 0.0
    blink = head.shape_key_add(name="Blink")
    blink.value = 0.0
except Exception:
    pass
head.select_set(False)

# ---------- Humanoid-style armature ----------
bpy.ops.object.armature_add(enter_editmode=True, location=(0,0,0))
arm = bpy.context.object
arm.name = "HLD531_Humanoid_Rig"
arm.data.name = "HLD531_Humanoid_RigData"

bones = [
    ("Hips", (0,0,1.95), (0,0,2.15), None),
    ("Spine", (0,0,2.15), (0,0,2.55), "Hips"),
    ("Chest", (0,0,2.55), (0,0,2.80), "Spine"),
    ("Neck", (0,0,2.80), (0,0,3.05), "Chest"),
    ("Head", (0,0,3.05), (0,0,3.55), "Neck"),
    ("LeftUpperArm", (-0.42,0,2.70), (-0.80,0,2.45), "Chest"),
    ("LeftLowerArm", (-0.80,0,2.45), (-0.80,0,2.08), "LeftUpperArm"),
    ("LeftHand", (-0.80,0,2.08), (-0.80,0,1.95), "LeftLowerArm"),
    ("RightUpperArm", (0.42,0,2.70), (0.80,0,2.45), "Chest"),
    ("RightLowerArm", (0.80,0,2.45), (0.80,0,2.08), "RightUpperArm"),
    ("RightHand", (0.80,0,2.08), (0.80,0,1.95), "RightLowerArm"),
    ("LeftUpperLeg", (-0.20,0,1.95), (-0.32,0,1.40), "Hips"),
    ("LeftLowerLeg", (-0.32,0,1.40), (-0.32,0,0.75), "LeftUpperLeg"),
    ("LeftFoot", (-0.32,0,0.75), (-0.32,-0.25,0.15), "LeftLowerLeg"),
    ("RightUpperLeg", (0.20,0,1.95), (0.32,0,1.40), "Hips"),
    ("RightLowerLeg", (0.32,0,1.40), (0.32,0,0.75), "RightUpperLeg"),
    ("RightFoot", (0.32,0,0.75), (0.32,-0.25,0.15), "RightLowerLeg"),
]
for name, h, t, parent in bones:
    b = arm.data.edit_bones.new(name)
    b.head = h
    b.tail = t
    if parent:
        b.parent = arm.data.edit_bones.get(parent)

bpy.ops.object.mode_set(mode='POSE')
# Custom properties useful for later VRChat/Unity mapping
arm["avatar_name"] = "HLD531"
arm["head_direction"] = "LEFT_25_DEGREES"
arm["vrchat_note"] = "Set Rig to Humanoid in Unity/VRChat SDK"
bpy.ops.object.mode_set(mode='OBJECT')

# Parent visible meshes to the armature object without deforming yet.
# This keeps the generated scene organized and ready for weight painting.
for o in bpy.context.scene.objects:
    if o.type == 'MESH' and o != arm:
        mod = o.modifiers.new("Armature_Deform", "ARMATURE")
        mod.object = arm

# ---------- Scene ----------
bpy.context.scene.world.color = (0.035, 0.035, 0.05)
bpy.context.scene.render.engine = 'BLENDER_EEVEE_NEXT'

# Put camera in a useful portrait position
bpy.ops.object.camera_add(location=(0, -7.2, 2.45), rotation=(math.radians(82), 0, 0))
cam = bpy.context.object
cam.name = "VRChat_Preview_Camera"
bpy.context.scene.camera = cam

# Aim camera at avatar center
def point_camera(obj, target):
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat('-Z','Y').to_euler()
point_camera(cam, (0,0,2.05))

# Light
bpy.ops.object.light_add(type='AREA', location=(3,-4,5))
key = bpy.context.object
key.data.energy = 900
key.data.shape = 'DISK'
key.data.size = 4
point_camera(key, (0,0,2.4))

bpy.ops.object.light_add(type='AREA', location=(-3,-2,3))
fill = bpy.context.object
fill.data.energy = 500
fill.data.size = 3
point_camera(fill, (0,0,2.5))

# Select armature
bpy.ops.object.select_all(action='DESELECT')
arm.select_set(True)
bpy.context.view_layer.objects.active = arm

print("HLD531 VRChat starter avatar created. Head is turned 25 degrees LEFT.")
print("Next: export FBX -> Unity -> VRChat SDK -> Humanoid -> Avatar Descriptor.")

