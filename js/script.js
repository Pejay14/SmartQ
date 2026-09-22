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

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

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