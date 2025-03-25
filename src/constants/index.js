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
        name: "Dart",
        icon: dart
    },
    {
        name: "Flutter",
        icon: flutter
    },
    {
        name: "Gazebo",
        icon: gazebo
    },
    {
        name: "Git",
        icon: git
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
        name: "Mujoco",
        icon: mujoco
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
        name: "Python",
        icon: python
    },
    {
        name: "ROS2",
        icon: ros2
    },
    {
        name: "Tensorflow",
        icon: tensorflow
    }
]

const experiences = [
    {
        title: "Application Developer Intern",
        company_name: "Amateur Ball LLC",
        icon: amateurball,
        /*iconBg: "#383E56",*/
        date: "May 2024 - August 2024",
        points: [
          "Migrated flagship app from React Native to Flutter, improving UI smoothness and reducing load times by 30%.",
          "Optimized app performance by reducing memory usage and enhancing responsiveness post-migration.",
          "Developed a real-time anomaly detection system in Python, identifying unusual behavior patterns, which improved system robustness.",
          "Developed a sentiment analysis model and spam detection algorithm using Python to filter negative user content and inappropriate content, enhancing user safety.",
        ],
      },
      {
        title: "Flutter Development Intern",
        company_name: "Amazeyoo/ Arkverse Pvt. Ltd.",
        icon: amazeyoo,
        /*iconBg: "#383E56",*/
        date: "January 2022 - June 2022",
        points: [
            "Improved the UI/UX with reusable custom widgets in Flutter, boosting user interaction by 90%.",
            "Integrated Google Auth for a custom login feature, enhancing engagement and security.",
            "Engineered APIs with Django Rest Framework and PostgreSQL for efficient data handling.",
            "Built a Python ML recommendation engine with 93% accuracy."
        ],
      }
]

const projects = [
    {
        name: "Real Steel",
        points:
          [
            "Developing a real-time motion retargeting system that maps human upper-body movements onto a humanoid robot while ensuring kinematic and dynamic feasibility. \n This involves integrating a camera-based motion capture system with retargeting and control modules, while also exploring machine learning techniques to enhance motion prediction and control."
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