---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 🧍‍♂️Biography

I am Fengcheng Yu, a undergrad at [Sun Yat-sen University](https://www.sysu.edu.cn/). My interests mainly focus on operating system performance optimization, computer network performance optimization, distributed system design and architecture, virtualization research and development, machine learning, computer vision, autonomous driving, and automatic control. I will receive the Bachelor of Engineering degree from Sun Yat-sen University in June 2025. From 2022 to 2023, I had the honor to conduct scientific research and study in Professor [Calvin Yu-Chian Chen (陈语谦)](https://www.ece.pku.edu.cn/info/1053/2659.htm)'s (Director of AI for Science (AI4S) at Peking University). laboratory, YCLab. From 2024 to 2025, I had the honor to conduct scientific research and study in Professor [Tan Guang (谭光)](https://ise.sysu.edu.cn/teacher/teacher01/1354976.htm)'s laboratory. My resume is available upon request. If you would like to chat, feel free to reach out.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 📚 Education
- **Sun Yat-sen University** *2021-2025* 
  - Undergraduate, Intelligence Science and Technology, Computer Science; GPA: 3.9/4.0, 3.9/5.0;

# 🔥 Awards
- *2021-2024*: &nbsp; Outstanding Student Scholarship, SYSU (1st Prize in 2022 🏅, **awarded consecutively 2022-2024**)
- *2022-2024*: &nbsp; Academic Competition Scholarship, SYSU **(awarded consecutively 2023 and 2024)**
- *2022*: &nbsp; 1st Prize of Asia and Pacific Mathematical Contest in Modeling (national-level)
- *2023*: &nbsp; 2nd Prize of China University Computer Competition - Group Programming Ladder Competition - Guangdong
- *2023*: &nbsp; 2nd Prize in the "LanQiao" Cup National Software Competition (C/C++) Guangdong Division

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computers in Biology and Medicine 2024</div><img src='images/pd-model.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Parkinson’s severity diagnosis explainable model based on 3D multi-head attention residual network](https://www.sciencedirect.com/science/article/pii/S001048252400043X)

Jiehui Huang, Lishan Lin, **Fengcheng Yu**, Xuedong He, Wenhui Song, Jiaying Lin, Zhenchao Tang, Kang Yuan, Yucheng Li, Haofan Huang, Zhong Pei, Wenbiao Xian, Calvin Yu-Chian Chen

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

- Proposed an effective end-to-end deep learning model for Parkinson's disease (PD) severity diagnosis based on facial video is proposed. The model can extract features from PD patient videos and give robust and interpretable diagnostic results, effectively judging the severity of PD disease.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/occ.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LEAP: Enhancing Vision-Based Occupancy Networks with Lightweight Spatio-Temporal Correlation](https://arxiv.org/pdf/2502.15438)

**Fengcheng Yu**, Haoran Xu, Canming Xia, Guang Tan

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

- Proposed a **plug-and-play** module to boost 3D occupancy prediction accuracy by resolving occlusions and sparse cues; developed a compact latent space for aligning multi-view features, motion, and temporal data; designed a tri-stream fusion (temporal-motion-visual) to refine global pixel-voxel correlations; integrated lightweight residual optimization with <5% computational overhead; achieved state-of-the-art results on autonomous driving benchmarks while maintaining real-time inference.

</div>
</div>



# 🔧 Selected Projects

<!-- here -->

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/haremq.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**HareMQ** *Simulation implementation of RabbitMQ core functions*

- Developed a C++-based message queue system inspired by RabbitMQ, focusing on implementing various message routing methods such as direct, topic, header, and fan-out exchanges to enhance messaging flexibility.
- Engineered the system to support message persistence and high availability, ensuring reliability and service continuity akin to RabbitMQ’s operational standards.
- Integrated multiple client support and was designed to handle scenarios in big data processing, microservice architectures, and real-time data applications, reflecting a comprehensive understanding of distributed systems.

**Related technologies:** C/C++, C++11, Boost, Protobuf, Muduo, SQLite3, Gtest

[**Project**](https://github.com/ffengc/HareMQ) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

</div>
</div>

<!-- here -->

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/search-engine.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**boost-search-engine** *A search engine implementation based on the Boost library*

- Developed a specialized search engine for Boost library documentation, enhancing search accuracy and efficiency using C++, Boost libraries, HTML, CSS, and JavaScript.
- Managed the entire search engine construction process from data preprocessing and index creation to query processing and result presentation, ensuring a comprehensive search experience.
- Implemented advanced features such as word frequency analysis, dynamically updated indexes, and prioritized search result
sorting, making the system highly effective for developers seeking quick access to technical documents.

**Related technologies:** C/C+, C++11, STL, Boost, jsoncpp, cppjieba, cpp-httplib, jQuery, ajax

[**Project**](https://github.com/ffengc/boost-search-engine/) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

</div>
</div>
<!-- here -->
<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/lb-model.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Load-balanced-online-OJ-system** *An online algorithm question-solving service, similar to LeetCode*

- Developed an online coding and evaluation platform similar to LeetCode, enabling users to write, submit, and evaluate code directly in the browser. Supported and Provided instant feedback and detailed error analysis.
- Implemented key features including question browsing, real-time code editing with Ace editor, and automated code submission and judgment. Integrated custom load balancing to optimize server utilization and response times.

**Related technologies:** STL, Boost standard library, cpp-httplib, ctemplate, jsoncpp, load balancing design, distributed systems, multi process/thread control, MySQL C Connect, Ace editor, ajax

[**Project**](https://github.com/ffengc/Load-balanced-online-OJ-system) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

</div>
</div>

<!-- here -->

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/tcmalloc.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Google-tcmalloc-simulation-implementation**

The tcmalloc is a memory management project open sourced by Google. I implemented the core functions in tcmalloc through learning and simulation, and implemented a high-concurrency memory pool to replace the native malloc memory development method. Its design purpose is to adapt to the characteristics of a single server with multiple CPU cores, and to ensure that the performance of the memory allocator will not drop sharply due to multi-core competition. In order to reduce memory usage, objects of the same memory size are concentrated in spans composed of several adjacent pages.

**Related technologies:** STL, multi-threading, memory management algorithms, lock-free programming

[**Project**](https://github.com/ffengc/Google-tcmalloc-simulation-implementation) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

</div>
</div>

<!-- here -->

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/logsystem.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Multi-Pattern-Logging-System**

- Engineered a comprehensive logging system in C++ that supports multi-level logging, synchronous and asynchronous modes, and reliable output to various destinations like console and files. Utilized advanced C++ features and design patterns to ensure thread-safe operations and expandability across different logging environments.

**Related technologies:** class hierarchy design (inheritance and polymorphism), producer consumer model, multi-threading, design pattern (singleton, factory proxy, builder, etc.), GTest

[**Project**](https://github.com/ffengc/Multi-Pattern-Logging-System) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

</div>
</div>

<!-- here -->

<div class='paper-box'><div class='paper-box-image'><div><img src='images/projects/event-pipe.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Event-Driven-Pipeline-Communication-System-Framework**

- Developed an event-driven communication framework using Epoll, optimizing inter-process communication with a focus on
efficient data handling. Created a modular system that supports easy integration and expansion, providing a robust platform
for developers to implement and adapt in various environments.

**Related technologies:** STL, system programming, multiplexing technology, pipe communication

[**Project**](https://github.com/ffengc/Event-Driven-Pipeline-Communication-System-Framework) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

</div>
</div>

<!-- here -->

- [Dual-Thread-Pool-Based-Pipeline-Communication-System-Framework](https://github.com/ffengc/Dual-Thread-Pool-Based-Pipeline-Communication-System-Framework)
  - This project implements a pipeline communication system framework based on dual thread pools from scratch, which is essentially communication between processes. The thread pool object code of this project is highly maintainable and highly readable. Thread pool objects can be easily reused in other projects
- [Reactor-based-HyperWebServer](https://github.com/ffengc/Reactor-based-HyperWebServer)
  - The project manually implemented an epoll server based on red brick tree from scratch, and on this basis, encapsulated it into a reactor asynchronous IO multiplexing server. Due to the multiplexing feature, this network server can withstand high concurrency.

# 💻 Internships
- *2024.01 - 2024.02*, **Yunhong Information Technology Co., Ltd.**, Guangzhou, China.
  - *Virtualization R&D Engineer in R&D Department*
  - Initiated and developed the “virtual machine probe” using Libvmi to monitor KVM architectures effectively. Enhanced virtual machine-to-host interactions through spice-protocol, enabling clipboard sharing and file dragging.
  - Produced detailed documentation on new tools and protocols, significantly improving development and testing efficiency within the R&D department. Established a Confluence workspace to enhance collaborative efforts among a five-person team.
- *2024.07 - 2024.09*, **Lingzong Technology (Shenzhen) Co., Ltd.**, Shenzhen, China.
  - *R&D center intern*
  - Conducted in-depth research on advanced occupancy prediction technologies such as SurroundOcc and SelfOcc. Focused on understanding and experimenting with their core functionalities and advantages.
  - Researched and explored the mechanism of “multi-head prediction” in occupancy prediction, adjusted the original model structure to enhance prediction accuracy.