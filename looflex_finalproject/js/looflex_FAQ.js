 document.getElementById("servic").style.display = "none";
        document.getElementById("howtous").style.display = "none";
        document.getElementById("authorit").style.display = "none";
        document.getElementById("tec").style.display = "none";
        document.getElementById("mone").style.display = "none";

        document.getElementById("service").addEventListener('click', () => {
            document.getElementById("servic").style.display = "block";
            document.getElementById("howtous").style.display = "none";
            document.getElementById("authorit").style.display = "none";
            document.getElementById("tec").style.display = "none";
            document.getElementById("mone").style.display = "none";
        })

        document.getElementById("howtouse").addEventListener('click', () => {
            document.getElementById("servic").style.display = "none";
            document.getElementById("howtous").style.display = "block";
            document.getElementById("authorit").style.display = "none";
            document.getElementById("tec").style.display = "none";
            document.getElementById("mone").style.display = "none";
        })

        document.getElementById("authority").addEventListener('click', () => {
            document.getElementById("servic").style.display = "none";
            document.getElementById("howtous").style.display = "none";
            document.getElementById("authorit").style.display = "block";
            document.getElementById("tec").style.display = "none";
            document.getElementById("mone").style.display = "none";
        })

        document.getElementById("tech").addEventListener('click', () => {
            document.getElementById("servic").style.display = "none";
            document.getElementById("howtous").style.display = "none";
            document.getElementById("authorit").style.display = "none";
            document.getElementById("tec").style.display = "block";
            document.getElementById("mone").style.display = "none";
        })

        document.getElementById("money").addEventListener('click', () => {
            document.getElementById("servic").style.display = "none";
            document.getElementById("howtous").style.display = "none";
            document.getElementById("authorit").style.display = "none";
            document.getElementById("tec").style.display = "none";
            document.getElementById("mone").style.display = "block";
        })



        //버튼 제어

        document.querySelectorAll(".solution").forEach(el => {
            el.style.display = "none";
        });
        //a 4개
        document.getElementById("a1").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("a1a1").style.display = "block";
        })
        document.getElementById("a2").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("a2a2").style.display = "block";
        })
        document.getElementById("a3").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("a3a3").style.display = "block";
        })
        document.getElementById("a4").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("a4a4").style.display = "block";
        })


        //b4개
        document.getElementById("b1").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("b1b1").style.display = "block";
        })
        document.getElementById("b2").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("b2b2").style.display = "block";
        })
        document.getElementById("b3").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("b3b3").style.display = "block";
        })
        document.getElementById("b4").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("b4b4").style.display = "block";
        })


        //c3개
        document.getElementById("c1").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("c1c1").style.display = "block";
        })
        document.getElementById("c2").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("c2c2").style.display = "block";
        })
        document.getElementById("c3").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("c3c3").style.display = "block";
        })



        //d3개
        document.getElementById("d1").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("d1d1").style.display = "block";
        })
        document.getElementById("d2").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("d2d2").style.display = "block";
        })
        document.getElementById("d3").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("d3d3").style.display = "block";
        })



        //e3개
        document.getElementById("e1").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("e1e1").style.display = "block";
        })
        document.getElementById("e2").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("e2e2").style.display = "block";
        })
        document.getElementById("e3").addEventListener('click', () => {
            document.querySelectorAll(".solution").forEach(el => {
                el.style.display = "none";
            });
            document.getElementById("e3e3").style.display = "block";
        })
