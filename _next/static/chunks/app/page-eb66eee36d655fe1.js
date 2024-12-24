(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    2267: function(e, i, a) {
        Promise.resolve().then(a.bind(a, 1255))
    },
    1255: function(e, i, a) {
        "use strict";
        a.r(i),
        a.d(i, {
            default: function() {
                return O
            }
        });
        var t = a(9268)
          , s = a(6006)
          , n = a(5846)
          , l = a.n(n)
          , o = function() {
            return (0,
            t.jsxs)("svg", {
                id: "logo",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 100",
                children: [(0,
                t.jsx)("title", {
                    children: "Logo"
                }), (0,
                t.jsxs)("g", {
                    children: [(0,
                    t.jsx)("g", {
                        id: "K",
                        transform: "translate(35.000000, 33.000000)",
                        children: (0,
                        t.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "icon icon-tabler icon-tabler-letter-l",
                            width: "35",
                            height: "35",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "currentColor",
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [" ", (0,
                            t.jsx)("path", {
                                stroke: "none",
                                d: "M0 0h24v24H0z",
                                fill: "none"
                            }), " ", (0,
                            t.jsx)("path", {
                                d: "M17 8a4 4 0 0 0 -4 -4h-2a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 -4 -4"
                            }), " "]
                        })
                    }), (0,
                    t.jsx)("path", {
                        stroke: "currentColor",
                        strokeWidth: "5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
                    })]
                })]
            })
        }
          , r = function(e) {
            let {text: i, link: a} = e;
            return (0,
            t.jsx)(l(), {
                href: a,
                className: "btn",
                children: i
            })
        }
          , c = a(8136)
          , d = a(4526)
          , h = a(198)
          , m = a(943)
          , p = function() {
            let[e,i] = (0,
            s.useState)(!1)
              , [a,n] = (0,
            s.useState)(0)
              , [p,u] = (0,
            s.useState)(!0)
              , [x,g] = (0,
            s.useState)(!1)
              , j = ()=>{
                if (x)
                    return;
                let e = window.scrollY;
                u(a > e || e < 10),
                n(e)
            }
            ;
            return (0,
            s.useEffect)(()=>(window.addEventListener("scroll", j),
            ()=>window.removeEventListener("scroll", j)), [a, p]),
            (0,
            s.useEffect)(()=>{
                let e = document.querySelectorAll(".nav-items-list-item-link");
                e.forEach(e=>{
                    e.addEventListener("click", ()=>{
                        g(!1)
                    }
                    )
                }
                );
                let i = document.querySelector(".nav-items");
                null == i || i.addEventListener("click", e=>{
                    e.stopPropagation()
                }
                );
                let a = document.querySelector("html");
                null == a || a.addEventListener("click", ()=>{
                    g(!1)
                }
                )
            }
            , []),
            (0,
            s.useEffect)(()=>{
                let e = document.querySelector("main");
                x ? null == e || e.classList.add("blur") : null == e || e.classList.remove("blur")
            }
            , [x]),
            (0,
            t.jsx)("nav", {
                style: {
                    position: "fixed",
                    top: p ? "0" : "-110px"
                },
                children: (0,
                t.jsxs)("div", {
                    className: "wrapper",
                    children: [(0,
                    t.jsx)(m.E.div, {
                        className: "logo",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        children: (0,
                        t.jsx)(l(), {
                            href: "/",
                            children: (0,
                            t.jsx)(o, {})
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "navb",
                        children: [(0,
                        t.jsx)("div", {
                            className: "theme",
                            children: (0,
                            t.jsx)(m.E.button, {
                                className: "toggle-button",
                                onClick: ()=>{
                                    i(!e),
                                    document.documentElement.classList.toggle("light")
                                }
                                ,
                                initial: {
                                    opacity: 0,
                                    y: -25
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut",
                                    delay: .2
                                },
                                children: e ? (0,
                                t.jsx)(c.gxG, {
                                    className: "icon"
                                }) : (0,
                                t.jsx)(c.aQ_, {
                                    className: "icon"
                                })
                            })
                        }), (0,
                        t.jsx)(m.E.div, {
                            className: "nav-responsive-toggle",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .3,
                                ease: "easeInOut"
                            },
                            children: x ? (0,
                            t.jsx)(h.Fk5, {
                                onClick: e=>{
                                    e.stopPropagation(),
                                    g(!1)
                                }
                            }) : (0,
                            t.jsx)(d.vHB, {
                                onClick: e=>{
                                    e.stopPropagation(),
                                    g(!0)
                                }
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "".concat(x && "nav-responsive", " nav-items"),
                            children: [(0,
                            t.jsx)("ul", {
                                className: "nav-items-list",
                                children: [{
                                    name: "About",
                                    link: "/#about"
                                }, {
                                    name: "Experience",
                                    link: "/#experience"
                                }, {
                                    name: "Work",
                                    link: "/#work"
                                }, {
                                    name: "Contact",
                                    link: "/#contact"
                                }].map((e,i)=>{
                                    let {name: a, link: s} = e;
                                    return (0,
                                    t.jsx)(m.E.li, {
                                        className: "nav-items-list-item",
                                        initial: {
                                            opacity: 0,
                                            y: -25
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: .3,
                                            ease: "easeInOut",
                                            delay: .3 + (i + 1) * .1
                                        },
                                        children: (0,
                                        t.jsx)(l(), {
                                            href: s,
                                            className: "nav-items-list-item-link",
                                            children: a
                                        })
                                    }, a)
                                }
                                )
                            }), (0,
                            t.jsx)(m.E.div, {
                                className: "nav-items-button",
                                initial: {
                                    opacity: 0,
                                    y: -25
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut",
                                    delay: .7
                                },
                                children: (0,
                                t.jsx)(r, {
                                    text: "Resume",
                                    link: "https://steavobabu.vercel.app/resume.pdf"
                                })
                            })]
                        })]
                    })]
                })
            })
        }
          , u = a(3393)
          , x = a(4537)
          , g = a(2447)
          , j = function() {
            let e = [{
                name: "Github",
                icon: (0,
                t.jsx)(u.uOf, {}),
                link: "https://github.com/Steavo171"
            }, {
                name: "LinkedIn",
                icon: (0,
                t.jsx)(u.qOw, {}),
                link: "https://www.linkedin.com/in/Steavobabu/"
            }, {
                name: "Twitter",
                icon: (0,
                t.jsx)(u.Ccr, {}),
                link: "https://x.com/Steavo_Babu"
            }, {
                name: "Leetcode",
                icon: (0,
                t.jsx)(x.LRI, {}),
                link: "https://leetcode.com/u/steavo/"
            }, {
                name: "Email",
                icon: (0,
                t.jsx)(g.rlm, {}),
                link: "mailto:steavobabu638@gmail.com"
            }];
            return (0,
            t.jsx)(m.E.div, {
                className: "social-icons",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .3,
                    ease: "easeInOut",
                    delay: 1.6
                },
                children: (0,
                t.jsx)("ul", {
                    className: "social-icons-list",
                    children: e.map(e=>{
                        let {name: i, icon: a, link: s} = e;
                        return (0,
                        t.jsx)("li", {
                            title: i,
                            className: "social-icons-list-item",
                            children: (0,
                            t.jsx)(l(), {
                                href: s,
                                className: "social-icons-list-item-link",
                                target: "_blank ",
                                children: a
                            })
                        }, i)
                    }
                    )
                })
            })
        }
          , f = function() {
            return (0,
            t.jsxs)("div", {
                className: "intro",
                children: [(0,
                t.jsx)(m.E.h1, {
                    className: "intro-title",
                    initial: {
                        opacity: 0,
                        y: 5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .3,
                        ease: "easeInOut",
                        delay: .7
                    },
                    children: "Hi my name is"
                }), (0,
                t.jsx)(m.E.h2, {
                    className: "intro-title-large",
                    initial: {
                        opacity: 0,
                        y: 5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .3,
                        ease: "easeInOut",
                        delay: .85
                    },
                    children: "Steavo Babu."
                }), (0,
                t.jsx)(m.E.h3, {
                    className: "intro-title-large intro-title-sub",
                    initial: {
                        opacity: 0,
                        y: 5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .3,
                        ease: "easeInOut",
                        delay: 1.1
                    },
                    children: "Driven by a passion for machine learning and data science, I'm dedicated to leveraging data to drive impactful decisions."
                }), (0,
                t.jsx)(m.E.p, {
                    className: "intro-text",
                    initial: {
                        opacity: 0,
                        y: 5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .3,
                        ease: "easeInOut",
                        delay: 1.35
                    },
                    children: "I'm a computer engineering student based in Nagpur, India. I specialize in building responsive websites and mobile apps. Fascinated by machine learning and artificial intelligence, I aspire to create intelligent applications that shape the future."
                })]
            })
        }
          , v = a(6394)
          , y = a.n(v)
          , b = function() {
            return (0,
            t.jsxs)(m.E.div, {
                className: "about",
                id: "about",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                variants: {
                    hidden: {
                        opacity: 0,
                        y: 0
                    },
                    visible: {
                        opacity: 1,
                        y: -50
                    }
                },
                children: [(0,
                t.jsx)("div", {
                    className: "title",
                    children: (0,
                    t.jsx)("h2", {
                        children: "About me"
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "about-grid",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "about-grid-info",
                        children: [(0,
                        t.jsxs)("p", {
                            className: "about-grid-info-text",
                            children: ["Hello, I'm Steavo Babu, a Computer Engineering student from Nagpur with a passion for technology and a strong background in ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "full-stack development"
                            }), ". I find great joy in crafting efficient and elegant solutions for web applications and I also have in-depth knowledge of ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "data structures and algorithms"
                            }), "."]
                        }), (0,
                        t.jsxs)("p", {
                            className: "about-grid-info-text",
                            children: ["I have a strong passion for ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "machine learning"
                            }), ". The idea of creating smart systems that can solve real-world problems excites me, and I'm always eager to explore new ways to apply this cutting-edge technology to various domains."]
                        }), (0,
                        t.jsxs)("p", {
                            className: "about-grid-info-text",
                            children: ["I am also known for my ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "flexibility"
                            }), " and a genuine ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "eagerness to learn new things"
                            }), ". I believe that the world of technology is constantly evolving, and staying curious and open-minded is essential for personal growth. I'm always up for a challenge and continually seek opportunities to expand my skillset."]
                        }), (0,
                        t.jsxs)("p", {
                            className: "about-grid-info-text",
                            children: ["I am fluent in both ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "English"
                            }), " and ", (0,
                            t.jsx)("span", {
                                className: "imp",
                                children: "Hindi"
                            }), ", which has proven to be a valuable asset in my journey as a tech enthusiast."]
                        }), (0,
                        t.jsx)("p", {
                            className: "about-grid-info-text",
                            children: "Here are a few technologies that have been a core part of my recent work:"
                        }), (0,
                        t.jsxs)("ul", {
                            className: "about-grid-info-list",
                            children: [(0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "HTML"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "CSS"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "JavaScript"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "MySql"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "AWS"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "Next.js"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "PostgreSQL"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "PHP"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "SQL"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "C/C++"
                            }), (0,
                            t.jsx)("li", {
                                className: "about-grid-info-list-item",
                                children: "Python"
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "about-grid-photo",
                        children: [(0,
                        t.jsx)("div", {
                            className: "overlay"
                        }), (0,
                        t.jsx)("div", {
                            className: "overlay-border"
                        }), (0,
                        t.jsx)("div", {
                            className: "about-grid-photo-container",
                            children: (0,
                            t.jsx)(y(), {
                                src: "/profile.webp",
                                alt: "profile pic",
                                fill: !0
                            })
                        })]
                    })]
                })]
            })
        }
          , N = function() {
            let[e,i] = (0,
            s.useState)(0);
            (0,
            s.useEffect)(()=>{
                (()=>{
                    let i = document.querySelector(".underline");
                    i.style.top = "".concat(4 * e, "rem")
                }
                )()
            }
            , [e]);
            let a = [{
                name: "Oasis Infobyte",
                role: "Full Stack Developer",
                url: "https://oasisinfobyte.com/",
                start: "November 2023",
                end: "December 2023",
                shortDescription: ["Engineered and optimized a landing page using HTML, CSS, ensuring high-performance standards.", "Developed a simple portfolio website  fostering technical skills and knowledge.", "Implemented a temperature converter website using JavaScript."]
            }, {
                name: "Infinity SVPCET",
                role: "Registration Coordinator",
                url: "https://ceinfinity.in/",
                start: "October 2023",
                end: "November 2023",
                shortDescription: [" Engineered web page for the event  with optimized functionality and user experience."," Handled large databases to ensure smooth functioning of the event."," Demonstrated expertise in both front-end and back-end development, contributing to a responsive and business-aligned website."]
            },{
                name: "Technex Hackathon SVPCET",
                role: "Team Member",
                url: "https://technex.stvincentngp.edu.in/",
                start: "October 2023",
                end: "November 2023",
                shortDescription: [" Co-developed a website for the event and successfully organized a 24-hour hybrid coding hackathon for college students across India, drawing over 300 participants from around the country."]
            }];
            return (0,
            t.jsxs)(m.E.div, {
                className: "experience",
                id: "experience",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                variants: {
                    hidden: {
                        opacity: 0,
                        y: 0
                    },
                    visible: {
                        opacity: 1,
                        y: -50
                    }
                },
                children: [(0,
                t.jsx)("div", {
                    className: "title",
                    children: (0,
                    t.jsx)("h2", {
                        children: "Where I've worked"
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    t.jsxs)("ul", {
                        className: "exp-slider",
                        children: [(0,
                        t.jsx)("div", {
                            className: "underline"
                        }), a.map((a,s)=>(0,
                        t.jsx)("li", {
                            className: "exp-slider-item ".concat(s === e && "exp-slider-item-selected"),
                            onClick: ()=>i(s),
                            children: (0,
                            t.jsx)("span", {
                                children: a.name
                            })
                        }, s))]
                    }), (0,
                    t.jsx)("div", {
                        className: "exp-details",
                        children: (0,
                        t.jsxs)("div", {
                            className: "exp-details-position",
                            children: [(0,
                            t.jsxs)("h3", {
                                children: [(0,
                                t.jsx)("span", {
                                    children: a[e].role
                                }), (0,
                                t.jsxs)("span", {
                                    className: "exp-details-position-company",
                                    children: ["\xa0@\xa0", (0,
                                    t.jsxs)(l(), {
                                        className: "link",
                                        href: a[e].url,
                                        target: "_blank",
                                        children: [a[e].name, ""]
                                    })]
                                })]
                            }), (0,
                            t.jsxs)("p", {
                                className: "exp-details-range",
                                children: [a[e].start, " - ", a[e].end]
                            }), (0,
                            t.jsx)("ul", {
                                className: "exp-details-list",
                                children: a[e].shortDescription.map((e,i)=>(0,
                                t.jsx)("li", {
                                    className: "exp-details-list-item ",
                                    children: e
                                }, i))
                            })]
                        })
                    })]
                })]
            })
        }
          , k = function() {
            return (0,
            t.jsxs)(m.E.div, {
                className: "projects",
                id: "work",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                variants: {
                    hidden: {
                        opacity: 0,
                        y: 0
                    },
                    visible: {
                        opacity: 1,
                        y: -50
                    }
                },
                children: [(0,
                t.jsx)("div", {
                    className: "title",
                    children: (0,
                    t.jsx)("h2", {
                        children: "Some projects I've Built"
                    })
                }), (0,
                t.jsx)("div", {
                    className: "projects-container",
                    children: [{
                        image: "voting.png",
                        projectName: "Online Voting System",
                        projectLink: "https://github.com/Steavo171/Online-Voting-System.git",
                        projectDescription: "A web-based application designed to facilitate electronic voting processes for various purposes, such as elections, surveys, or polls.",
                        projectTech: ["JavaScript", "MySql", "PHP", "HTML", "Hack"],
                        projectExternalLinks: {
                            github: "https://github.com/Steavo171/Online-Voting-System.git",
                            externalLink: "https://github.com/Steavo171/Online-Voting-System.git"
                        }
                    }, {
                        image: "/ASL.png",
                        projectName: "Podify Studio",
                        projectLink: "https://github.com/Steavo171/podify-studio.git",
                        projectDescription: "Podify Studio is a Python application that simplifies podcast creation by converting text-based dialogs into audio and seamlessly merging them into polished episodes. It supports multiple text-to-speech engines, including gTTS and pyttsx3.",
                        projectTech: ["Python", "gTTS", "pyttsx3", "CustomTkinter"],
                        projectExternalLinks: {
                            github: "https://github.com/Steavo171/podify-studio.git",
                            externalLink: "https://github.com/Steavo171/podify-studio.git"
                        }
                    }, {
                        image: "/whatsapp.webp",
                        projectName: "Wave Transpiler",
                        projectLink: "https://github.com/Steavo171/Wave.git",
                        projectDescription: "Wave is a Python-based markup language that converts JSON into HTML with inline CSS. Simplify creating beautiful documents like invitations, letters, and business cards using structured JSON files and a single transpiler script.",
                        projectTech: ["Python", "Transpiler", "Markup-language", "JSON"],
                        projectExternalLinks: {
                            github: "https://github.com/Steavo171/Wave.git",
                            externalLink: "https://github.com/Steavo171/Wave.git"
                        }
                    }].map(e=>{
                        let {image: i, projectDescription: a, projectLink: s, projectExternalLinks: n, projectName: o, projectTech: r} = e;
                        return (0,
                        t.jsxs)("div", {
                            className: "project",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "project-image",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "project-image-overlay"
                                }), (0,
                                t.jsx)("div", {
                                    className: "project-image-container",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: n.github,
                                        children: (0,
                                        t.jsx)(y(), {
                                            src: i,
                                            alt: o,
                                            fill: !0,
                                            quality: 100
                                        })
                                    })
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "project-info",
                                children: [(0,
                                t.jsx)("h3", {
                                    className: "project-info-title",
                                    children: (0,
                                    t.jsx)(l(), {
                                        href: s,
                                        className: "link",
                                        target: "_blank",
                                        children: o
                                    })
                                }), (0,
                                t.jsx)("div", {
                                    className: "project-info-description",
                                    children: (0,
                                    t.jsx)("p", {
                                        children: a
                                    })
                                }), (0,
                                t.jsx)("ul", {
                                    className: "project-info-tech-list",
                                    children: r.map(e=>(0,
                                    t.jsx)("li", {
                                        className: "project-info-tech-list-item",
                                        children: e
                                    }, e))
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "project-info-links",
                                    children: [(0,
                                    t.jsx)("li", {
                                        className: "project-info-links-item",
                                        children: (0,
                                        t.jsx)(l(), {
                                            href: n.github,
                                            className: "project-info-links-item-link",
                                            target: "_blank",
                                            children: (0,
                                            t.jsx)(u.uOf, {})
                                        })
                                    }), (0,
                                    t.jsx)("li", {
                                        className: "project-info-links-item",
                                        children: (0,
                                        t.jsx)(l(), {
                                            href: n.externalLink,
                                            className: "project-info-links-item-link",
                                            children: (0,
                                            t.jsx)(u.AlO, {})
                                        })
                                    })]
                                })]
                            })]
                        }, o)
                    }
                    )
                })]
            })
        }
          , w = a(536)
          , L = function() {
            let e = (0,
            s.useRef)()
              , i = i=>{
                i.preventDefault(),
                w.ZP.sendForm("service_1tzsci1", "template_95s1vqa", e.current, "ayiOGQUKDHuuy7-6c").then(e=>{
                    console.log(e.text)
                }
                , e=>{
                    console.log(e.text)
                }
                ),
                e.current.reset()
            }
            ;
            return (0,
            t.jsxs)(m.E.div, {
                className: "contact",
                id: "contact",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                variants: {
                    hidden: {
                        opacity: 0,
                        y: 0
                    },
                    visible: {
                        opacity: 1,
                        y: -50
                    }
                },
                children: [(0,
                t.jsx)("h2", {
                    className: "contact-title",
                    children: "What's Next?"
                }), (0,
                t.jsx)("h2", {
                    className: "contact-sub-title",
                    children: "Get In Touch"
                }), (0,
                t.jsx)("p", {
                    className: "contact-text",
                    children: "Have a question ? Get in touch with me"
                }), (0,
                t.jsxs)("form", {
                    ref: e,
                    onSubmit: i,
                    className: "contact-form",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "contact-form-div",
                        children: [(0,
                        t.jsx)("label", {
                            className: "contact-form-tag",
                            children: "Name"
                        }), (0,
                        t.jsx)("input", {
                            type: "text",
                            name: "name",
                            className: "contact-form-input",
                            placeholder: "Your name",
                            required: !0
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "contact-form-div",
                        children: [(0,
                        t.jsx)("label", {
                            className: "contact-form-tag",
                            children: "Email"
                        }), (0,
                        t.jsx)("input", {
                            type: "email",
                            name: "email",
                            className: "contact-form-input",
                            placeholder: "Your email id",
                            required: !0
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "contact-form-div",
                        children: [(0,
                        t.jsx)("label", {
                            className: "contact-form-tag",
                            children: "Subject"
                        }), (0,
                        t.jsx)("input", {
                            type: "text",
                            name: "subject",
                            className: "contact-form-input",
                            placeholder: "Let me know how i can help",
                            required: !0
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "contact-form-div contact-form-area",
                        children: [(0,
                        t.jsx)("label", {
                            className: "contact-form-tag",
                            children: "Message"
                        }), (0,
                        t.jsx)("textarea", {
                            name: "message",
                            cols: "30",
                            rows: "10",
                            className: "contact-form-input",
                            placeholder: "Enter your message...",
                            required: !0
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "contact-cta",
                        onClick: i,
                        children: (0,
                        t.jsx)(r, {
                            text: "Send message",
                            link: "/#contact"
                        })
                    })]
                })]
            })
        }
          , E = a(4902)
          , S = a.n(E)
          , I = a(7743)
          , C = function(e) {
            let {isLoading: i, setIsLoading: a} = e;
            return (0,
            s.useEffect)(()=>{
                setTimeout(()=>{
                    a()
                }
                , 1900)
            }
            , [a]),
            (0,
            t.jsx)(I.M, {
                children: i && (0,
                t.jsx)(m.E.div, {
                    className: "loader",
                    exit: {
                        scale: 0
                    },
                    transition: {
                        duration: .45,
                        ease: "easeInOut"
                    },
                    children: (0,
                    t.jsxs)("svg", {
                        id: "loader",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 100 100",
                        children: [(0,
                        t.jsx)("title", {
                            children: "Logo"
                        }), (0,
                        t.jsxs)("g", {
                            children: [(0,
                            t.jsx)("g", {
                                id: "K",
                                transform: "translate(35.000000, 33.000000)",
                                children: (0,
                                t.jsxs)(m.E.svg, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 1
                                    },
                                    exit: {
                                        scale: 2
                                    },
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "icon icon-tabler icon-tabler-letter-l",
                                    width: "35",
                                    height: "35",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [" ", (0,
                                    t.jsx)("path", {
                                        stroke: "none",
                                        d: "M0 0h24v24H0z",
                                        fill: "none"
                                    }), " ", (0,
                                    t.jsx)("path", {
                                        d: "M17 8a4 4 0 0 0 -4 -4h-2a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 -4 -4"
                                    }), " "]
                                })
                            }), (0,
                            t.jsx)(m.E.path, {
                                initial: {
                                    pathLength: 0
                                },
                                animate: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut"
                                },
                                exit: {
                                    scale: 2
                                },
                                stroke: "currentColor",
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
                            })]
                        })]
                    })
                }, "motiondivleave")
            })
        };
        function O() {
            let[e,i] = (0,
            s.useState)(!0)
              , [a,n] = (0,
            s.useState)(!1);
            return (0,
            t.jsxs)("div", {
                className: "app",
                children: [(0,
                t.jsxs)(S(), {
                    children: [(0,
                    t.jsx)("title", {
                        children: "Steavo Babu"
                    }), (0,
                    t.jsx)("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico"
                    }), (0,
                    t.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })]
                }), a && (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)(p, {}), (0,
                    t.jsxs)("main", {
                        children: [(0,
                        t.jsx)(f, {}), (0,
                        t.jsx)(b, {}), (0,
                        t.jsx)(N, {}), (0,
                        t.jsx)(k, {}), (0,
                        t.jsx)(L, {})]
                    }), (0,
                    t.jsx)(j, {})]
                }), (0,
                t.jsx)(C, {
                    isLoading: e,
                    setIsLoading: ()=>{
                        i(!1),
                        setTimeout(()=>n(!0), 450)
                    }
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [217, 79, 415, 269, 680, 805, 253, 961, 744], function() {
        return e(e.s = 2267)
    }),
    _N_E = e.O()
}
]);
