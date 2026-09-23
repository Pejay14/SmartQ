/* =========================================================
   SMARTQ PROJECT WEBSITE
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const navbar =
        document.getElementById("navbar");

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    const navItems =
        document.querySelectorAll(".nav-link");

    const sections =
        document.querySelectorAll("section[id]");

    const revealElements =
        document.querySelectorAll(".reveal");

    const imageModal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalClose =
        document.getElementById("modalClose");

    const viewButtons =
        document.querySelectorAll(".view-image");


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle("open");

                document.body.classList.toggle(
                    "menu-open"
                );

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    navItems.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (navMenu) {

                    navMenu.classList.remove(
                        "open"
                    );

                }

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach((link) => {

            const target =
                link.getAttribute("href");

            if (!target || !target.startsWith("#")) {
                return;
            }

            link.classList.remove("active");

            if (
                target ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       REVEAL ELEMENTS ON SCROLL
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    const projectImages =
        document.querySelectorAll(
            ".image-container img"
        );


    projectImages.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                const placeholder =
                    image.parentElement.querySelector(
                        ".image-placeholder"
                    );

                if (placeholder) {

                    placeholder.style.zIndex = "3";

                    placeholder.style.opacity = "1";

                    placeholder.style.visibility =
                        "visible";

                }

            }
        );

    });


    /* =====================================================
       IMAGE MODAL
    ===================================================== */

    viewButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const imagePath =
                    button.getAttribute(
                        "data-image"
                    );

                if (
                    !imageModal ||
                    !modalImage ||
                    !imagePath
                ) {

                    return;

                }

                modalImage.src =
                    imagePath;

                imageModal.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "modal-open"
                );

            }
        );

    });


    /* =====================================================
       CLOSE IMAGE MODAL
    ===================================================== */

    function closeModal() {

        if (!imageModal) {
            return;
        }

        imageModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "modal-open"
        );

        if (modalImage) {

            modalImage.src = "";

        }

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (imageModal) {

        imageModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    imageModal
                ) {

                    closeModal();

                }

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {

                        return;

                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );

});

/* =====================================================
       DYNAMIC WBS GENERATOR
    ===================================================== */

    const wbsGrid = document.getElementById('wbsGrid');

    if (wbsGrid) {
        const columns = [
            ['1.0', 'Project Management|and Planning', 'blue', ['Define project|objectives and scope', 'Identify|stakeholders', 'Define project|team roles', 'Develop project|schedule', 'Identify|project risks', 'Monitor|project progress']],
            ['2.0', 'Requirements|Analysis', 'green', ['Conduct interviews|with Registrar personnel|and users', 'Gather requirements|from students and clients', 'Analyze current|Registrar process', 'Define functional|requirements', 'Define non-functional|requirements', 'Validate and|prioritize requirements']],
            ['3.0', 'System|Design', 'orange', ['Design system|architecture', 'Design database|(ERD)', 'Design user roles|and permissions', 'Design user|interface', 'Design queue|workflow', 'Design request/|document tracking|workflow']],
            ['4.0', 'System|Development', 'red', ['Develop user|authentication', 'Develop student/|client module', 'Develop service|request module', 'Develop queue|reservation module', 'Develop queue|monitoring module', 'Develop notification|module', 'Develop request/|document tracking module', 'Develop Registrar/|admin module', 'Develop reports and|statistics module']],
            ['5.0', 'System|Integration', 'indigo', ['Integrate database|and application modules', 'Integrate queue|reservation and|monitoring', 'Integrate notification|functionality', 'Integrate request|and document tracking', 'Integrate dashboard|and reporting']],
            ['6.0', 'Testing and|Quality Assurance', 'yellow', ['Prepare test plan|and test cases', 'Conduct unit|testing', 'Conduct|integration testing', 'Conduct system|testing', 'Conduct usability|testing', 'Conduct security|and privacy testing', 'Fix defects and|retest']],
            ['7.0', 'Deployment and|Implementation', 'mint', ['Prepare production|environment', 'Deploy application|and database', 'Configure Registrar|staff accounts', 'Conduct initial|system setup', 'Conduct user|orientation/training', 'Pilot implementation', 'Full deployment']],
            ['8.0', 'Documentation', 'pink', ['Prepare technical|documentation', 'Prepare|administrator manual', 'Prepare|user manual', 'Document|testing results', 'Prepare final|system documentation']],
            ['9.0', 'Project Closure|and Evaluation', 'blue', ['Conduct final|system evaluation', 'Resolve|final issues', 'Conduct final|presentation/|demonstration', 'Turn over|system to Registrar', 'Prepare|maintenance|recommendations']]
        ];

        columns.forEach(([number, title, color, tasks]) => {
            const col = document.createElement('article');
            col.className = `wbs-column wbs-column--${color}`;
            col.innerHTML = `<header class="column-title"><strong>${number}</strong><span>${title.replaceAll('|', '<br>')}</span></header><div class="task-list">${tasks.map((task, i) => `<div class="task"><b>${number.split('.')[0]}.${i + 1}</b><span>${task.replaceAll('|', '<br>')}</span></div>`).join('')}</div>`;
            wbsGrid.appendChild(col);
        });
    }/* =====================================================
       DYNAMIC ACTIVITY SEQUENCING GENERATOR
    ===================================================== */

    const sequenceGrid = document.getElementById('sequenceGrid');

    if (sequenceGrid) {
        const activities = [
            {
                num: "1",
                title: "Project<br>Initiation",
                week: "Week 1",
                color: "blue",
                items: [
                    "Identify problem & objectives",
                    "Identify stakeholders",
                    "Establish project team",
                    "Define initial scope"
                ]
            },
            {
                num: "2",
                title: "Requirements<br>Analysis",
                week: "Weeks 2–3",
                color: "green",
                items: [
                    "Gather user & staff requirements",
                    "Identify services & workflows",
                    "Define procedures"
                ]
            },
            {
                num: "3",
                title: "System<br>Planning & Design",
                week: "Weeks 4–5",
                color: "yellow",
                items: [
                    "Develop use cases",
                    "Database design (ERD)",
                    "System architecture",
                    "Process flows"
                ]
            },
            {
                num: "4",
                title: "UI/UX<br>Design",
                week: "Week 5",
                color: "pink",
                items: [
                    "Create wireframes & prototypes",
                    "Design student & staff interfaces"
                ]
            },
            {
                num: "5",
                title: "System<br>Development",
                week: "Weeks 6–9",
                color: "purple",
                items: [
                    "Develop student/client module",
                    "Develop Registrar module",
                    "Develop admin module"
                ]
            },
            {
                num: "6",
                title: "System<br>Integration",
                week: "Week 9",
                color: "teal",
                items: [
                    "Integrate queue reservation",
                    "Integrate monitoring & alerts",
                    "Integrate document tracking"
                ]
            },
            {
                num: "7",
                title: "System<br>Testing",
                week: "Week 10",
                color: "orange",
                items: [
                    "Functional & usability testing",
                    "Security & integration testing"
                ]
            },
            {
                num: "8",
                title: "Revision &<br>Improvement",
                week: "Week 11",
                color: "rose",
                items: [
                    "Fix identified issues",
                    "Improve system functionality"
                ]
            },
            {
                num: "9",
                title: "Finalization",
                week: "Week 12",
                color: "periwinkle",
                items: [
                    "Complete documentation & manual",
                    "Prepare presentation",
                    "Final demonstration"
                ]
            }
        ];

        activities.forEach((act, idx) => {
            const card = document.createElement('article');
            card.className = `seq-card seq-card--${act.color}`;
            
            const arrowHtml = idx < activities.length - 1 ? `<div class="seq-arrow" aria-hidden="true">→</div>` : '';

            card.innerHTML = `
                <div class="seq-card-header">
                    <span class="seq-num">${act.num}</span>
                    <h4>${act.title}</h4>
                </div>
                <div class="seq-card-body">
                    <ul>
                        ${act.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <span class="seq-week">${act.week}</span>
                </div>
                ${arrowHtml}
            `;

            sequenceGrid.appendChild(card);
        });
    }