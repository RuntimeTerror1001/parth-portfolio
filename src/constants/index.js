import {
    amateurball,
    amazeyoo,
    c,
    carla,
    dart,
    flutter,
    gazebo,
    git,
    linux,
    matlab,
    matplotlib,
    mujoco,
    numpy,
    opencv,
    pandas,
    python,
    rashmi,
    ros2,
    tensorflow
} from '../assets/icons/'

import {
  drone,
  genesis,
  real_steel,
  solar,
  lkas_aeb,
  atlas
} from '../assets/projects/'

import {
  motion_planning,
  perception,
  robotics,
  slam,
  control
} from '../assets/interests/'

const techs = [
    {
        name: "C++",
        icon: c
    },
    {
      name: "Python",
      icon: python
    },
    {
        name: "ROS2",
        icon: ros2
    },
    {
      name: "Gazebo",
      icon: gazebo
    },
    {
      name: "MuJoCo",
      icon: mujoco
    },
    {
      name: "CARLA",
      icon: carla
    },
    {
      name: "Linux",
      icon: linux
    },
    {
      name: "Matlab",
      icon: matlab
    },
    {
        name: "Matplotlib",
        icon: matplotlib
    },
    {
        name: "Numpy",
        icon: numpy
    },
    {
        name: "OpenCV",
        icon: opencv
    },
    {
        name: "Pandas",
        icon: pandas
    },
    {
        name: "Tensorflow",
        icon: tensorflow
    },
    {
        name: "Dart",
        icon: dart
    },
    {
        name: "Flutter",
        icon: flutter
    },
    {
        name: "Git",
        icon: git
    }
]

const experiences = [
    {
        title: "Software & Automation Developer",
        company_name: "Rashmi Enterprises",
        icon: rashmi,
        /*iconBg: "#383E56",*/
        date: "Jan 2021 - July 2023",
        points: [
          "Designed and deployed the company’s website, establishing a professional digital presence and improving client outreach by 50%.",
          "Developed an OpenCV-based print defect detection system prototype, identifying misalignments and smudges in real-time using the integrated camera footage.",
          "Simulated a fleet of autonomous mobile robots (AMRs) in ROS2 and Gazebo to automate material transport across print, binding, and packaging stations using decentralized task coordination.",
          "Developed a vision-guided sorting prototype, where agents classified printed materials by quality using OpenCV and executed sorting tasks through ROS2-controlled actuators.",
          "Designed a modular ROS2 architecture with separate perception, planning, and control nodes, enabling scalable and testable simulation workflows."
        ],
      }
]

const projects = [
    {
    name: "ADAS - Path Following & AEB",
    points: [
      "Fused front LiDAR + RGB and rear dual radars + RGB via EKF with Mahalanobis/IoU gating, cutting camera-only false positives 36% in dusk/rain and ID-switches 28% across 40+ scenarios.",
      "LKAS held ≤0.22 m lateral error at 60 km/h with adaptive lookahead pure-pursuit + PID; p95 steering-command latency 12 ms; TTC-gated AEB reached 95% collision-avoidance with p95 perception 42 ms and end-to-stop 430 ms."
    ],
    description: [
      "End-to-end ROS 2 stack with deterministic launches, stable TF (map/odom/base_link), and a scenario suite covering lane changes, cut-ins, and parked-car edge cases.",
      "Perception uses YOLOv8n detections with multi-object Kalman tracking to estimate relative speed and TTC, feeding a confidence-aware AEB supervisor.",
      "Calibration and sync: camera–LiDAR and radar–camera extrinsics with TF checks; ApproximateTime filters kept inter-sensor skew p95 < 10 ms for EKF stability.",
      "Degradations and safety: watchdogs for stale TF/sensor timeouts, speed caps on confidence drop, and minimum-risk stop triggers under fusion fallback."
    ],
    key_features: [
      "✅ EKF fusion with Mahalanobis/IoU gating",
      "✅ TTC-based AEB with tracked relative velocities",
      "✅ ≤0.22 m LKAS lateral error @ 60 km/h",
      "✅ p95 perception 42 ms; end-to-stop 430 ms",
      "✅ Deterministic ROS 2 launches and TF hygiene"
    ],
    tech: [
      { name: "ROS 2" },
      { name: "CARLA" },
      { name: "Python" },
      { name: "OpenCV" },
      { name: "PyTorch" },
      { name: "YOLOv8n" },
      { name: "LiDAR" },
      { name: "Radar" },
      { name: "EKF" },
      { name: "PID Control" },
      { name: "Pure-Pursuit" },
      { name: "RViz" }
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "CARLA", color: "red-text-gradient" },
      { name: "Sensor Fusion", color: "purple-text-gradient" },
      { name: "Perception", color: "pink-text-gradient" }
    ],
    image: lkas_aeb, 
    source_code_link: "https://github.com/RuntimeTerror1001/LKAS_AEB",
    demos: [
      {
        type: "video",
        title: "Path Following with Curves",
        description: "Demonstrates adaptive pure-pursuit steering through curved paths with smooth trajectory following",
        url: "./demos/lkas_aeb/1. Path Following with Curves.mp4"
      },
      {
        type: "video", 
        title: "Emergency Braking System",
        description: "TTC-based automatic emergency braking when detecting obstacles with <500ms response time",
        url: "./demos/lkas_aeb/5. emergency braking.mp4"
      },
      {
        type: "video",
        title: "Obstacle Detection & Stopping",
        description: "Vehicle safely stops before obstacles using YOLOv8 detection and distance estimation",
        url: "./demos/lkas_aeb/2. Stops b4 obstacle.mp4"
      },
      {
        type: "video",
        title: "Intersection Navigation",
        description: "Autonomous navigation through intersection with proper lane following",
        url: "./demos/lkas_aeb/3. Intersection.mp4"
      },
      {
        type: "video",
        title: "Intersection with Obstacle Avoidance", 
        description: "Complex scenario combining intersection navigation with obstacle detection and avoidance",
        url: "./demos/lkas_aeb/4. intersection with obstacle.mp4"
      },
      {
        type: "video",
        title: "Slow Start and Stop at Goal",
        description: "Smooth acceleration from standstill and precise stopping at target destination",
        url: "./demos/lkas_aeb/6. Slow start and stop at goal.mp4"
      }
    ]
  },
  {
    name: "ATLAS - Autonomouos Warehuose Picking and Inventory Management",
    points: [
      "Single-launch ROS 2 bring-up for sim, perception, planning, and manipulation; ≥85% end-to-end patrol/pick completion with BehaviorTree.CPP.",
      "3D perception pipeline reached ≥85% correct segmentation at <40 ms @ 30 Hz; per-object Kalman tracking held ID-switches <5%; mapping/estimation met ATE <0.15 m over 100 m with loop-closure drift <1%."
    ],
    description: [
      "Warehouse sim with TurtleBot4 + arm; one launch starts Ignition Gazebo, perception, MoveIt2, and RViz.",
      "Perception: pass-through, 1 cm voxel grid, SOR, RANSAC plane removal, Euclidean clustering; persistent IDs and grasp filtering with retry-on-failure.",
      "State estimation: fused IMU, wheel odom, and VO/LIO for stable map/odom/base_link frames.",
      "Planning and control: Nav2 with OMPL BIT* global and MPPI local; plan P50 <150 ms (P95 <500 ms), RMS tracking <0.10 m @ ~1 m/s.",
      "Precision docking: AprilTag visual servoing; final pose error ≤2 cm and ≤1.2° with 98% success over 120 pallet-bay trials."
    ],
    key_features: [
      "✅ Single-launch ROS 2 bring-up",
      "✅ RANSAC + Euclidean clustering segmentation",
      "✅ Per-object KF tracking with low ID-switch",
      "✅ OMPL BIT* + MPPI with tight RMS tracking",
      "✅ AprilTag docking ≤2 cm / ≤1.2°"
    ],
    tech: [
      { name: "ROS 2" },
      { name: "Ignition Gazebo Fortress Sim." },
      { name: "C++" },
      { name: "Python" },
      { name: "MoveIt2" },
      { name: "PCL" },
      { name: "Open3D" },
      { name: "OpenCV" },
      { name: "Nav2" },
      { name: "BehaviorTree.CPP" },
      { name: "RViz" },
      { name: "TF2" }
    ],
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "Gazebo", color: "red-text-gradient" },
      { name: "MoveIt2", color: "purple-text-gradient" },
      { name: "Perception", color: "pink-text-gradient" }
    ],
    image: atlas, 
    source_code_link: "https://github.com/RuntimeTerror1001/ATLAS"
  },
  {
    name: "Real Steel",
    points: [
      "Mapped human upper-body motion to robot joints in real time using MediaPipe, ROS 2, and joint-limit-aware IK smoothing.",
      "Achieved 85 ms median and 110 ms p95 end-to-end latency with ~90% motion jitter reduction in MuJoCo sparring."
    ],
    description: [
      "Real-time motion retargeting from human keypoints to a 7-DOF robot arm with constraint-aware IK for smooth transitions.",
      "Modular ROS 2 nodes for perception, IK solving, and joint-space control; pipeline tuned for responsive boxing-style routines."
    ],
    key_features: [
      "✅ Real-time human-to-robot motion mapping",
      "✅ Constraint-aware IK for 7-DOF arms",
      "✅ Sub-100 ms median latency",
      "✅ Modular ROS 2 architecture",
      "✅ MuJoCo validation for dynamic motion"
    ],
    tech: [
      { name: "ROS2" },
      { name: "MuJoCo Sim." },
      { name: "Python" },
      { name: "MediaPipe" },
      { name: "Inverse Kinematics" },
      { name: "NumPy" }
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "MuJoCo", color: "red-text-gradient" },
      { name: "IK", color: "pink-text-gradient" }
    ],
    image: real_steel,
    source_code_link: "https://github.com/RuntimeTerror1001/Real-Steel",
    demos:[
      {
        type: "video",
        title: "Input Video", 
        description: "Set of motions given as input. (View in Fullscreen)",
        url: "./demos/real_steel/input_vid.mp4"
      },
      {
        type: "video",
        title: "Output Video",
        description: "Set of replicated motions by the robot. (View in Fullscreen)",
        url: "./demos/real_steel/output_vid.mp4"
      }
    ]
  },
  {
    name: "HELIOS SAR Drone",
    points: [
      "Implemented a 200 Hz cascaded PID stack in C++ commanding thrust and body torques with anti-windup and clamping; no heap allocations post-init; p95 loop jitter 2.1 ms on PREEMPT_RT Linux.",
      "Validated robustness across 20 injected faults, reaching a controlled descent with touchdown radius 0.6 m and keeping attitude error <2.5°; nominal hover RMS 0.22 m."
    ],
    description: [
      "X-quad motor mixing, runtime-tunable ROS 2 parameters, and arming state machine with loss-of-odom guard and soft altitude ceiling.",
      "Tuned Z/attitude loops via gain sweeps; Z-step settling <1.0 s with <8% overshoot across 0.5–2 m steps.",
      "≥200 Hz control loop with zero allocations during runtime and strict watchdogs for sensor/estimation health."
    ],
    key_features: [
      "✅ Real-time C++ controller at 200 Hz",
      "✅ Anti-windup PID cascades",
      "✅ Hover RMS 0.22 m; attitude <2.5°",
      "✅ p95 loop jitter 2.1 ms",
      "✅ Fault-tolerant failsafes and safe descent"
    ],
    tech: [
      { name: "ROS2" },
      { name: "Ignition Gazebo Fortress Sim." },
      { name: "C++" },
      { name: "Control Systems" },
      { name: "RViz" }
    ],
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "Gazebo", color: "pink-text-gradient" },
      { name: "Control Systems", color: "red-text-gradient" }
    ],
    image: drone,
    source_code_link: "https://github.com/RuntimeTerror1001/HELIOS_SAR",
  },
  {
    name: "GENESIS",
    points: [
      "Enhanced speech clarity in real-world noise using a CNN-Conformer GAN trained with MetricGAN loss.",
      "Tested in café and traffic audio to simulate edge sensor conditions for robotic audio systems. "
    ],
    description: [
      "Built a deep learning pipeline to enhance speech clarity in noisy environments using a GAN-based architecture. ",
      "Combined CNNs and Conformer blocks with MetricGAN loss for time-frequency modeling. ",
      "Achieved 0.89 STOI and 1.92 dB SSNR on real-world noisy audio samples (cafés, traffic, music). ",
      "Trained on 11k+ VCTK samples and evaluated across 80 epochs using Slurm and A100 GPUs. ",
      "Simulated real-time inference scenarios relevant for assistive and embedded robotics applications. "
    ],
    key_features: [
      "✅ CNN-Conformer GAN for speech enhancement. ",
      "✅ Optimized for STOI and SSNR using MetricGAN. ",
      "✅ Real-world validation with diverse noise profiles. ",
      "✅ Edge inference design for robotic audio systems. ",
      "✅ 11k+ dataset training with GPU-accelerated pipelines. "
    ],
    tech: [
      { name: "Python"},
      { name: "PyTorch"},
      { name: "CNN"},
      { name: "Conformer"},
      { name: "MetricGAN"},
      { name: "NumPy"},
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyTorch", color: "red-text-gradient" },
      { name: "Numpy", color: "green-text-gradient" }
    ],
    image: genesis,
    source_code_link: "https://github.com/RuntimeTerror1001/GENESIS",
    demos: [
      {
        type: "audio",
        title: "Noisy Input Audio",
        description: "Original speech sample corrupted with real-world café background noise, representing challenging acoustic conditions",
        url: "./demos/genesis/genesis_noisy.wav"
      },
      {
        type: "audio",
        title: "Enhanced Clean Audio", 
        description: "Same speech after CNN-Conformer GAN processing, demonstrating significant noise reduction and clarity improvement",
        url: "./demos/genesis/genesis_clean.wav"
      }
    ]
  },
  {
    name: "Solar Panel Fault Detection",
    points: [
      "Achieved 97% fault classification accuracy using CNNs on current-voltage readings from a live solar array.",
      "Built full-stack web app with AngularJS frontend and Python backend. "
    ],
    description: [
      "Developed a CNN-based fault detection system for solar arrays using current and voltage sensor data. ",
      "Achieved 97% accuracy in identifying cracked cells, inverter faults, and grounding issues. ",
      "Built a full-stack dashboard with AngularJS frontend and Python backend for real-time alerts. ",
      "Tested on real-world solar panel data from a university array installation. ",
      "Enabled proactive monitoring with visual fault classification and time-series analysis. "
    ],
    key_features: [
      "✅ 97% classification accuracy across multiple fault types. ",
      "✅ Full-stack implementation with AngularJS and Python. ",
      "✅ Real-time monitoring with dashboard visualizations. ",
      "✅ CNN trained on real-world electrical data. ",
      "✅ Applied to live solar panel infrastructure. "
    ],
    tech: [
      { name: "Python"},
      { name: "Tensorflow"},
      { name: "CNN"},
      { name: "NumPy"},
      { name: "Pandas"},

    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Numpy", color: "green-text-gradient" }
    ],
    image: solar,
    source_code_link: "https://github.com/RuntimeTerror1001/Solar-Panel-Fault-Detection-System",
  }
]

const interests = [
  {
    title: "Robotics & Autonomy",
    icon: robotics 
  },
  {
    title: 'Motion Planning',
    icon: motion_planning
  },
  {
    title: 'Perception',
    icon: perception
  },
  {
    title: 'SLAM',
    icon: slam
  },
  {
    title: 'Control Systems',
    icon: control
  }
]

export {techs, experiences, projects, interests};