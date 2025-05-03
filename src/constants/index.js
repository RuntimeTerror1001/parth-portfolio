import {
    amateurball,
    amazeyoo,
    c,
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
  solar
} from '../assets/projects/'

import {
  motion_planning,
  perception,
  robotics,
  slam
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
      name: "Mujoco",
      icon: mujoco
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
        date: "Jan 2021 - Dec 2021, July 2022 - July 2023",
        points: [
          "Designed and deployed the company’s website, establishing a professional digital presence and improving client outreach by 50%.",
          "Developed an OpenCV-based print defect detection system prototype, identifying misalignments and smudges in real-time using the integrated camera footage.",
          "Simulated a fleet of autonomous mobile robots (AMRs) in ROS2 and Gazebo to automate material transport across print, binding, and packaging stations using decentralized task coordination.",
          "Developed a vision-guided sorting prototype, where agents classified printed materials by quality using OpenCV and executed sorting tasks through ROS2-controlled actuators.",
          "Designed a modular ROS2 architecture with separate perception, planning, and control nodes, enabling scalable and testable simulation workflows."
        ],
      },
      {
        title: "Flutter Development Intern",
        company_name: "Amazeyoo/ Arkverse Pvt. Ltd.",
        icon: amazeyoo,
        /*iconBg: "#383E56",*/
        date: "January 2022 - June 2022",
        points: [
          "Revamped UI/UX with reusable Flutter custom widgets, increasing user engagement by 90%.",
          "Designed and implemented RESTful APIs using Django REST Framework and PostgreSQL for efficient backend integration.",
          "Developed a Python-based recommendation engine achieving 93% accuracy in content personalization."
        ],
      }
]

const projects = [
    {
        name: "Real Steel",
        points:
          [
            "Developed a real-time motion retargeting system that maps human upper-body movements onto a humanoid robot while ensuring kinematic and dynamic feasibility. \n This involves integrating a camera-based motion capture system with retargeting and control modules, while also exploring machine learning techniques to enhance motion prediction and control."
          ],
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "ROS2",
            color: "green-text-gradient",
          },
          {
            name: "Linux",
            color: "pink-text-gradient",
          },
          {
            name: "MuJoCo",
            color: "red-text-gradient",
          }
        ],
        image: real_steel,
        source_code_link: "https://github.com/RuntimeTerror1001/Real-Steel",
    },
    {
        name: "HELIOS SAR Drone",
        points:
          [
            "Developing an autonomous search and rescue drone for disaster environments, integrating SLAM for real-time mapping in custom Gazebo worlds. \n Implementing RRT* for efficient path planning using LIDAR, camera, and IMU sensors. \n Planning to incorporate computer vision for object detection and victim localization, while exploring machine learning for dynamic obstacle prediction and adaptive navigation."
          ],
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "ROS2",
            color: "green-text-gradient",
          },
          {
            name: "Linux",
            color: "pink-text-gradient",
          },
          {
            name: "Gazebo",
            color: "red-text-gradient",
          }
        ],
        image: drone,
        source_code_link: "https://github.com/RuntimeTerror1001/HELIOS",
    },
    {
        name: "Generative Enhanced Noise Cancellation & Signal Improvement System (GENESIS)",
        points:
          [
            "Developed the GENESIS architecture to enhance speech quality in noisy environments, improving real-time communication for individuals with hearing impairments and auditory autism. Implemented a CNN and dilated DenseNet-based encoder-decoder, leveraging MetricGAN for speech quality optimization. Tested the system with self-recorded audio samples in real-world noisy settings like cafes, background music, and traffic."
          ],
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "Numpy",
            color: "green-text-gradient",
          }
        ],
        image: genesis,
        source_code_link: "https://github.com/RuntimeTerror1001/GENESIS",
    },
    {
        name: "Solar Panel Fault Detection System",
        points:
          [
            "Developed a fault detection system for solar panel arrays using current and voltage readings to ensure efficient and reliable energy production. Built a web application with an AngularJS frontend and Python backend, integrating a CNN for fault analysis. Achieved 97% accuracy in detecting issues like cracked cells, inverter faults, and ground failures, tested on a real solar array at my undergraduate institute."
          ],
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "Numpy",
            color: "green-text-gradient",
          }
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
  }
]

export {techs, experiences, projects, interests};