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
      "Built a ROS 2 stack for pure-pursuit path following and TTC-based AEB using front RGB+LiDAR fusion; filtered curb-parked cars via in-lane corridor gating and ROIs.",
      "Integrated PID-based speed control with progressive slowing; validated in 40+ CARLA traffic scenarios with <500 ms AEB response after TTC breach."
    ],
     description: [
      "Developed a real-time ADAS system in ROS 2 with front (RGB+LiDAR) fusion and rear (dual radars + rear RGB) awareness for safe lane decisions.\n",
      "Implemented pure-pursuit steering with adaptive lookahead, achieving <25 cm lateral deviation at 60 km/h.\n",
      "Used YOLOv8n detections + Kalman multi-object tracking to estimate relative speed and TTC for reliable emergency braking.\n",
      "Designed a PID longitudinal controller with dead-zone, anti-windup, and distance-band speed shaping.\n",
      "Hardened against curb-parked vehicles via lateral in-lane gating and LiDAR/camera ROI tightening; exercised in varied CARLA roads.\n"
    ],
    key_features: [
      "✅ TTC-based AEB with tracked relative velocities",
      "✅ Progressive speed control via distance bands",
      "✅ Adaptive pure-pursuit steering",
      "✅ Front (RGB+LiDAR) and rear (dual radar + rear RGB) fusion",
      "✅ RViz obstacle visualization with corridor overlays"
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
      { name: "PID Control" },
      { name: "Pure-Pursuit" },
      { name: "RViz" }
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "CARLA", color: "red-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "Sensor Fusion", color: "purple-text-gradient" }
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
      "Built a single-launch ROS 2 stack (sim, perception, planning, manipulation) and executed 3–5 autonomous pick–place cycles end-to-end.",
      "Cut point-cloud noise 60%+; segmented & tracked 15–30 items; median grasp plan <2 s with ≥80% success."
    ],
    description: [
      "Stood up a warehouse sim with TurtleBot4 + arm; one launch brings up Gazebo/Ignition, perception, MoveIt2, and RViz.",
      "Perception: pass-through (0.3–3.0 m), 1 cm voxel grid, statistical outlier removal → 60%+ noise reduction.",
      "Segmentation: RANSAC plane removal + Euclidean clustering (~5 cm tol, size filters) → 15–30 items with 85–90% precision.",
      "Grasping: PCA-aligned poses → MoveIt2 planning; median plan <2 s; ≥80% grasp success across 5+ object types.",
      "Execution: persistent object IDs, grasp filtering, retry-on-failure; simulated throughput ≥10 objects/min; p99 plan latency ≈2.8 s; RViz overlays for QA."
    ],
    key_features: [
      "✅ Single-launch ROS 2 bring-up (sim → perception → manipulation)",
      "✅ RANSAC + Euclidean clustering object segmentation",
      "✅ PCA-aligned grasp planning in MoveIt2",
      "✅ Persistent IDs, grasp filtering, retry-on-failure",
      "✅ Metrics: <2 s median plan, ≥10 objs/min throughput (sim)"
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
      "Mapped human upper-body motion to robot joints in real time using MediaPipe, ROS 2, and custom IK. ",
      "Simulated responsive sparring behavior in MuJoCo with joint-limit aware control."
    ],
    description: [
      "Built a real-time motion retargeting system to translate human upper-body movements to robot joint commands. ",
      "Used MediaPipe for pose tracking and a custom IK solver with joint-limit constraints for smooth motion transitions. ",
      "Achieved <100 ms latency and ~90% retargeting smoothness in MuJoCo humanoid simulation. ",
      "Explored ML-based motion prediction to improve tracking in fast-paced routines like boxing. ",
      "Integrated modular ROS 2 nodes for perception, IK solving, and joint-space control. "
    ],
    key_features: [
      "✅ Real-time human-to-robot motion mapping. ",
      "✅ Constraint-aware IK solver for 7-DOF robot arms. ",
      "✅ Sub-100 ms latency and high-frequency control loop. ",
      "✅ Modular ROS 2 stack for real-time humanoid control. ",
      "✅ MuJoCo simulation for testing dynamic motion retargeting. "
    ],
    tech: [
      { name: "ROS2"},
      { name: "MuJoCo Sim."},
      { name: "Python"},
      { name: "Mediapipe"},
      { name: "Inverse Kinematics"},
      { name: "NumPy"},
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "Linux", color: "pink-text-gradient" },
      { name: "MuJoCo", color: "red-text-gradient" }
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
      "Built a real-time C++ control plugin (thrust + body torques) for a DJI M100-class quad; single-launch ROS 2 bring-up.",
      "Cascaded PID (pos→vel→att→rate) with anti-windup, saturation, and failsafes; achieved ≤10 cm hover RMS and ≤2° attitude MAE (sim)."
    ],
    description: [
      "Authored a thrust/torque controller with X-quad motor mixing and runtime-tunable ROS 2 params.",
      "Tuned Z/attitude loops via gain sweeps; Z-step settling <1.0 s with <8% overshoot across 0.5–2 m steps.",
      "Rate loop MAE ≤2 deg/s under ±3 m/s gusts; control loop ≥200 Hz with zero allocations post-init.",
      "Added arming state machine, loss-of-odom guard, and soft altitude ceiling for safety."
    ],
    key_features: [
      "✅ Real-time C++ controller (thrust, τx, τy, τz)",
      "✅ Cascaded PID with anti-windup & clamping",
      "✅ Hover RMS ≤10 cm; attitude MAE ≤2° (sim)",
      "✅ Z-step settling <1.0 s; overshoot <8%",
      "✅ ≥200 Hz loop; zero-alloc runtime"
    ],
    tech: [
      { name: "ROS2"},
      { name: "Ignition Gazebo Fortress Sim."},
      { name: "C++"},
      { name: "Python"},
      { name: "Control Systems"},
      { name: "RViz"},
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
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