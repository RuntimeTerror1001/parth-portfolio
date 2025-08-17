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
  lkas_aeb
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
      "Built a ROS 2 stack for pure-pursuit path following and TTC-based emergency braking using YOLOv8 obstacle detection. ",
      "Integrated PID-based speed control with progressive slowing and validated in dynamic CARLA traffic. "
    ],
     description: [
      "Developed a modular full-stack ADAS system in ROS 2 with real-time perception and control. \n",
      "Implemented pure-pursuit steering with adaptive lookahead, achieving <25cm lateral deviation at 60 km/h. ",
      "Integrated a YOLOv8-based obstacle detector with class-aware TTC estimation for reliable emergency braking (<500ms response). ",
      "Designed a PID-based longitudinal controller with dead-zone, anti-windup, and progressive speed reduction based on obstacle proximity. ",
      "Validated in CARLA simulator with over 40 dynamic actors in varied road conditions. "
    ],
    key_features: [
      "✅ TTC-based AEB using tracked obstacle velocities. ",
      "✅ Progressive speed control based on distance bands. ",
      "✅ Adaptive pure-pursuit controller. ",
      "✅ Modular ROS 2 architecture (perception, control, planning). ", 
      "✅ Real-time testing in CARLA traffic scenarios. ",
    ],
    tech: [
      { name: "ROS2"},
      { name: "CARLA Sim."},
      { name: "Python"},
      { name: "OpenCV"},
      { name: "YOLOv8n"},
      { name: "PID Control"},
      { name: "Pure-Pursuit"},
      { name: "NumPy"},
      { name: "RViz"},
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "CARLA", color: "red-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" }
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
      "Designed a ROS 2-based autonomous drone for SLAM and RRT* path planning in disaster environments. ",
      "Built modular Gazebo worlds and integrated vision for victim detection and navigation. "
    ],
    description: [
      "Designed a ROS 2-based autonomous drone for search and rescue in disaster environments. ",
      "Fused LiDAR, camera, and IMU data for SLAM with <5% drift in custom Gazebo simulations. ",
      "Implemented RRT* for global path planning with ~90% success rate in ≤2.5s. ",
      "Developed custom PID controllers for thrust and velocity regulation, ensuring stable multi-rotor flight. ",
      "Built realistic disaster environments in Gazebo with clutter, occlusions, and debris. ",
      "Integrated victim detection and adaptive navigation using OpenCV and ROS 2 services. "
    ],
    key_features: [
      "✅ Multi-sensor SLAM using LiDAR, camera, and IMU. ",
      "✅ RRT* planner with rapid path generation. ",
      "✅ Custom PID for multi-rotor flight. ",
      "✅ OpenCV-based static victim detection (~80% accuracy). ",
      "✅ Custom Gazebo worlds for disaster simulation. ",
      "✅ ROS 2 node graph for full autonomy pipeline. "
    ],
    tech: [
      { name: "ROS2"},
      { name: "Gazebo Fortress Sim."},
      { name: "C++"},
      { name: "Python"},
      { name: "OpenCV"},
      { name: "RRT* Path Planning"},
      { name: "Sensor Fusion (LIDAR | IMU"},
      { name: "RViz"},
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ROS2", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "Gazebo", color: "red-text-gradient" }
    ],
    image: drone,
    source_code_link: "https://github.com/RuntimeTerror1001/HELIOS",
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