interface SkillContent {
    [key: string]: string[];
}
interface SkillCategory {
    title: string;
    content: SkillContent
  }

  interface Project {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo?: string;
    image?: string;
  }
  
  interface AboutSection {
    title: string;
    role: string;
    about: string[];
    skills: SkillCategory;
    projects: Project[]; 
  }
  
  interface Content {
    swe: AboutSection;
    devops: AboutSection;
  }



export const content: Content = {
    swe: {
        title: "Software Engineering",
        role: "Software Engineer",
        about: [
            "I am a passionate and dedicated software engineer specializing in full-stack web development. With expertise in both JavaScript and Python, along with their corresponding frameworks, I bring a versatile skill set to deliver robust and scalable web applications.",
            "As a full-stack developer, I have experience working on all layers of the application stack, from front-end development to back-end systems. I am well-versed in JavaScript frameworks such as React.js and Node.js, which enable me to build dynamic and interactive user interfaces. Additionally, I have hands-on experience with Python frameworks like Flask, allowing me to develop efficient and feature-rich server-side applications.",
            "With a strong foundation in both front-end and back-end technologies, I excel at designing and implementing end-to-end solutions. I am proficient in writing clean and maintainable code, following best practices and industry standards. My goal is to create user-friendly and performant applications that meet the needs of clients and end-users.",
            "Throughout my career, I have collaborated with cross-functional teams, including designers and product managers, to deliver successful projects. I am comfortable working in an Agile environment, adapting to changing requirements and timelines. My strong problem-solving skills and attention to detail enable me to identify and address challenges effectively.",
            "Continuous learning is essential in the ever-evolving field of software development, and I am committed to staying updated with the latest industry trends and technologies. I actively seek opportunities to enhance my skills and expand my knowledge base, allowing me to deliver cutting-edge solutions.",
            "If you are looking for a skilled and passionate software engineer who can bring your ideas to life, I would love to connect and discuss how I can contribute to your projects. Let's work together to build exceptional web applications that make a positive impact.",
            "Feel free to reach out to me for any inquiries or collaboration opportunities."
        ],
        skills: {
            title: "Languages, SKills and Technologies",
            content: {
                languages: ["javascript", "python", "sql"],
                frontend: ["react", "nextjs", "redux", "html", "css", "sass", "tailwindcss", "bootstrap", "material-ui", "styled-components", "zustand"],
                backend: ["nodejs", "express", "nestjs", "flask", "mongodb", "postgresql", "mysql", "redis", "prisma", "microsoft sql server", "firebase"],
                testing: ["jest", "enzyme", "react-testing-library", "cypress", "supertest", "mocha", "chai", "sinon", "doctest", "unittest", "parameterized"],
                others: ["git", "version control", "SCM(github, gitlab, bitbucket)"]
            }
        },
        projects: [
            {
                title: "DrCarQuotes",
                description: "A full-stack web application that allows users to search for mechanics nearby and get quotes for top cheapest repairs.",
                techStack: ["react"],
                github: "https://github.com/Innocent9712/colab16-team9",
                image: "https://i.imgur.com/Zqj3NqR.png",
                demo: "https://dr-carquotes.netlify.app/"
            },
            {
                title: "Project Pepper",
                description: "An API project for a complex Role Based Access Control inventory managment system.",
                techStack: ["nodejs", "express", "mysql", "prisma", "typescript"],
                github: "https://github.com/Innocent9712/project-pepper"
            },
            {
                title: "Franca",
                description: "A full-stack web application where people get to learn different nigerian languages and their dialects.",
                techStack: ["react", "zustand"],
                github: "https://github.com/patrickikhidero/Franca-Frontend",
                image: "https://i.imgur.com/zRcLgYT.png",
                demo: "https://franca-frontend-do3pm5emq-big-solve.vercel.app/"
            },
            {
                title: "AirBnB Clone",
                description: "A clone of AirBnB focused on exploring technolgies used to replicate the different components of the application.",
                techStack: ["flask", "mysql", "shell"],
                image: "https://i.imgur.com/2p7dgoY.png",
                github: "https://github.com/AtienoMboya/AirBnB_clone_v4"
            }
        ]
        
    },
    devops: {
        title: "Cloud DevOps Engineering",
        role: "Cloud DevOps Engineer",
        about: [
            "I am a highly skilled and passionate DevOps Engineer with expertise in a wide range of DevOps tools, cloud engineering technologies, and DevSecOps practices. With a strong background in software development and system administration, I bridge the gap between development and operations, enabling efficient and scalable software delivery.",
            "I have extensive experience working with a plethora of DevOps tools such as Jenkins, GitLab CI/CD, Flux CD. I am proficient in setting up and maintaining robust CI/CD pipelines, automating build and deployment processes, and ensuring continuous integration and delivery of applications.",
            "I am well-versed in cloud computing platforms, including Amazon Web Services (AWS) and Google Cloud Platform (GCP). I have hands-on experience deploying and managing cloud infrastructure, designing scalable architectures, and implementing highly available and fault-tolerant systems. I leverage infrastructure-as-code tools like Ansible, Terraform and CloudFormation to automate infrastructure provisioning and configuration.",
            "Security is a critical aspect of modern software development, and I have a deep understanding of DevSecOps practices. I am skilled in integrating security into the software development lifecycle, performing vulnerability assessments, implementing security controls, and ensuring compliance with industry standards and best practices.",
            "I am passionate about continuous monitoring, performance optimization, and automation. I leverage tools like Prometheus, Grafana, Kubernetes, and Docker to monitor application performance, gather metrics, and streamline deployment and management of containerized environments.",
            "I thrive in collaborative environments, working closely with cross-functional teams to foster a culture of collaboration, automation, and continuous improvement.",
            "If you are looking for a DevOps Engineer who can effectively streamline software delivery, optimize infrastructure, and ensure secure and reliable systems, I would be thrilled to contribute my expertise to your team."
        ],
        skills: {
            title: "Tools and Technologies",
            content: {
                'cloud platforms': ["aws", "gcp"],
                'infrastructure as code tools': ["terraform", "ansible", "cloudformation", "puppet"],
                'web servers': ["nginx", "apache", "apache tomcat"],
                'monitoring and observability': ["prometheus", "grafana", "kibana", "elasticsearch", "datadog", "aws xray and cloudwatch", "honeycomb", "rollbar"],
                others: ["nexus", "jenkins", "flux CD", "docker", "kubernetes", "linux", "Virtual Machines"]
            },
        },
        projects: [
            {
                title: "Socks Shop Microservices",
                description: "A microservices application deployed on Kubernetes using Helm charts, Flux and Github Actions.",
                techStack: ["kubernetes", "flux cd", "helm", "github actions"],
                github: "https://github.com/Innocent9712/Altschool-Semester-3-Exam"
            },
            {
                title: "AWS Bootcamp Crudder",
                description: "Deploying a Social media Application utilizing several DevOps and Cloud technologies on the FREE AWS Cloud Project Bootcamp.",
                techStack: ["AWS", "docker",  "and more..."],
                github: "https://github.com/Innocent9712/aws-bootcamp-cruddur-2023"
            },
            {
                title: "Terraform Mini Project",
                description: "Deploying a Laravel application using Ansible and Terraform and Some AWS Services.",
                techStack: ["Ansible", "AWS", "Terraform"],
                github: "https://github.com/Innocent9712/altschool-cloud-exercises/tree/master/terraform-mini-project"
            }
        ]
    }
}