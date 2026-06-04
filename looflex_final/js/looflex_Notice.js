//==================================================================================================
        //기본값 설정. 페이지 1을 제외한 2페이지 3페이지 본문 내용 보여주기 전부 배제한 상황.
        //아래쪽은 버튼을 통해 통제함.
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('showG').style.display = 'none';

        document.getElementById('num1b').addEventListener('click', () => {
            document.getElementById('page1').style.display = 'block';
            document.getElementById('page2').style.display = 'none';
            //1번 버튼 누를 경우 2 3 공지내용 보여주기 전부 막기.
            document.getElementById('page3').style.display = 'none';
            document.getElementById('showG').style.display = 'none';

        })

        document.getElementById('num2b').addEventListener('click', () => {
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'block';
            //2번 버튼 누를 경우 1 3 공지내용 보여주기 전부 막기.
            document.getElementById('page3').style.display = 'none';
            document.getElementById('showG').style.display = 'none';

        })

        document.getElementById('num3b').addEventListener('click', () => {
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'none';
            document.getElementById('page3').style.display = 'block';
            //3번 버튼 누를 경우 1 2 공지내용 보여주기 전부 막기.
            document.getElementById('showG').style.display = 'none';

        })
        //============================================================================================







        //=====================================================================================


        const Gdata = [
            { id: "gong1", title: "어린왕자", date: "2026-05-26", content: "모든 어른들은 한때 어린이였다. <br>그러나 그것을 기억하는 어른은 별로 없다." },
            { id: "gong2", title: "앵무새죽이기", date: "2026-05-25", content: "누군가를 정말로 이해하려고 한다면 그 사람의 입장에서 생각해야 하는 거야. 말하자면 그 사람의 살갗 안으로 들어가 그 사람이 되어서 걸어 다니는 거지" },
            { id: "gong3", title: "짜라투스트라는 이렇게말했다", date: "2026-05-24", content: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지니고 있어야 한다." },
            { id: "gong4", title: "데일카네기의 인간관계론", date: "2026-05-23", content: "좋은 이야기꾼은 타인의 이야기를<br>잘 들어주는 사람" },
            { id: "gong5", title: "죄와 벌", date: "2026-05-22", content: "나는 노파를 죽인 게 아니야. 나 자신을 죽인 거지." },
            { id: "gong6", title: "탈무드", date: "2026-05-21", content: "다른 사람의 입장에 서기 전까지는 절대 그 사람을 욕하거나 판단하지 마라." },
            { id: "gong7", title: "돈키호테", date: "2026-05-20", content: "이룰 수 없는 꿈을 꾸고, 이루어질 수 없는 사랑을 하고, 이길 수 없는 적과 싸우고, 견딜 수 없는 고통을 견디며, 잡을 수 없는 저 하늘의 별을 잡자." },
            { id: "gong8", title: "위대한 개츠비", date: "2026-05-19", content: "누군가를 비판하고 싶어질 때마다, 세상 모든 사람이 너처럼 유리한 입장에 놓여 있는 것은 아니라는 사실을 기억하렴." },
            { id: "gong9", title: "톰소여의 모험", date: "2026-05-18", content: "모험을 시작하라. 그게 바로 인생의 묘미다." },
            { id: "gong10", title: "개미", date: "2026-05-17", content: "퇴근마렵다" },
            { id: "gong11", title: "다빈치코드", date: "2026-05-16", content: "공지 11번 내용입니다." },
            { id: "gong12", title: "노인과 바다", date: "2026-05-15", content: "어쨌든 살아돌아왔으니 좋아쓰" },
            { id: "gong13", title: "안네의 일기", date: "2026-05-14", content: "공지 13번 내용입니다." },
            { id: "gong14", title: "바람과 함께 사라지다", date: "2026-05-13", content: "공지 14번 내용입니다." },
            { id: "gong15", title: "드래곤 라자", date: "2026-05-12", content: "말과 제가 후치에 올라타면 됩니다" },
            { id: "gong16", title: "눈물을 마시는 새", date: "2026-05-11", content: "눈물을 마시는 새가 가장 아름다운 노래를 부른다고 하더군." },
            { id: "gong17", title: "피를 마시는 새", date: "2026-05-10", content: "붓으로 이루어진 범죄라 하여 가볍게 여길 수는 없습니다. 붓이 칼보다 강하다고 말하는 문필가는 많습니다. 하지만 그들 중 적지 않은 이들이 붓으로 이루어진 범죄가 칼로 이루어진 범죄보다 더 큰 처벌을 받아야 한다고 말하면 억울해 합니다. 바르지 못한 일입니다. 붓이 정녕 칼보다 강하다면, 그 책임 또한 더 무거워야 합니다." },
            { id: "gong18", title: "그림자 제국", date: "2026-05-09", content: "공지 18번 내용입니다." },
            { id: "gong19", title: "룬의 아이들", date: "2026-05-08", content: "공지 19번 내용입니다." },
            { id: "gong20", title: "하얀 늑대들", date: "2026-05-07", content: "공지 20번 내용입니다." },
            { id: "gong21", title: "광마회귀", date: "2026-05-06", content: "칼을 든 원숭이" },
            { id: "gong22", title: "게임 속 바바리안으로 살아남기", date: "2026-05-05", content: "공지 22번 내용입니다." },
            { id: "gong23", title: "검은머리 미군 대원수", date: "2026-05-04", content: "안녕 나는 금괴야" },
            { id: "gong24", title: "나는 전설이다", date: "2026-05-03", content: "공지 24번 내용입니다." },
            { id: "gong25", title: "파우스트", date: "2026-05-02", content: "공지 25번 내용입니다." },
            { id: "gong26", title: "안나카레니나", date: "2026-05-01", content: "공지 26번 내용입니다." }
        ];

        //============================================================================================
        // Gdata 배열을 기준으로 버튼 텍스트 채우기
        // Gdata 배열은 이미 준비되어 있다고 가정
        Gdata.forEach(gdataline => {
            const btn = document.getElementById(gdataline.id);
            if (btn) {
                // 버튼에 제목 날짜 표시
                btn.innerHTML = `<div>${gdataline.title}</div><div style="font-size:12px; color:gray;">${gdataline.date}</div>`;

                // 버튼 클릭 시 상세 내용 보여주기
                btn.addEventListener("click", () => {
                    const showBox = document.getElementById("showG");
                    showBox.style.display = "block";
                    showBox.innerHTML = `
        <h2>${gdataline.title}</h2>
        <p><strong>작성일:</strong> ${gdataline.date}</p>
        <p>${gdataline.content}</p>
        <button id="backBtn">뒤로가기</button>
      `;

                    // 목록 페이지 숨기기
                    document.getElementById("page1").style.display = "none";
                    document.getElementById("page2").style.display = "none";
                    document.getElementById("page3").style.display = "none";

                    // 뒤로가기 버튼 이벤트
                    document.getElementById("backBtn").addEventListener("click", () => {
                        showBox.style.display = "none";
                        document.getElementById("page1").style.display = "block"; // 기본으로 page1 보여주기
                    });
                });
            }
        });


        // =====================================================
        // 제목 검색 기능
        // =====================================================
        // ======================================================
        // 검색 기능
        // ======================================================

        document.querySelector(".Qimage")
            .addEventListener("click", () => {

                const keyword =
                    document.getElementById(
                        "searchInput"
                    ).value.trim();

                // 검색어 없으면 무시
                if (keyword === "") {
                    return;
                }

                // 검색 결과
                const result =
                    Gdata.filter(item =>
                        item.title.includes(
                            keyword
                        )
                    );

                // 기존 페이지 숨기기
                document.getElementById(
                    "page1"
                ).style.display = "none";

                document.getElementById(
                    "page2"
                ).style.display = "none";

                document.getElementById(
                    "page3"
                ).style.display = "none";

                // 페이지 버튼 숨김
                document.querySelector(
                    ".navigation"
                ).style.display = "none";

                // 상세보기 영역 재활용
                const showBox =
                    document.getElementById(
                        "showG"
                    );

                showBox.style.display =
                    "block";

                showBox.innerHTML = "";

                // 결과 없음
                if (result.length === 0) {

                    showBox.innerHTML =
                        "<h3>검색 결과가 없습니다.</h3>";

                } else {

                    // 검색 결과 출력
                    result.forEach(item => {

                        showBox.innerHTML += `
                <div class="gong">
                    <button
                        class="search-result-btn"
                        data-id="${item.id}"
                    >
                        <div>
                            ${item.title}
                        </div>

                        <div style="
                            font-size:12px;
                            color:gray;
                        ">
                            ${item.date}
                        </div>
                    </button>
                </div>
            `;
                    });

                    // 검색 결과 클릭
                    document
                        .querySelectorAll(
                            ".search-result-btn"
                        )
                        .forEach(btn => {

                            btn.addEventListener(
                                "click",
                                () => {

                                    const item =
                                        Gdata.find(
                                            data =>
                                                data.id ===
                                                btn.dataset.id
                                        );

                                    showBox.innerHTML = `
                            <h2>
                                ${item.title}
                            </h2>

                            <p>
                                <strong>
                                    작성일:
                                </strong>
                                ${item.date}
                            </p>

                            <p>
                                ${item.content}
                            </p>

                            <button id="backBtn">
                                뒤로가기
                            </button>
                        `;

                                    document
                                        .getElementById(
                                            "backBtn"
                                        )
                                        .addEventListener(
                                            "click",
                                            () => {

                                                // 검색 결과 화면으로 복귀
                                                document
                                                    .querySelector(
                                                        ".Qimage"
                                                    )
                                                    .click();
                                            }
                                        );
                                }
                            );
                        });
                }

                // 되돌리기 버튼 보이기
                document.getElementById(
                    "resetBtn"
                ).style.display =
                    "inline-block";
            });


        // ======================================================
        // 되돌리기 버튼
        // ======================================================

        document.getElementById(
            "resetBtn"
        ).addEventListener("click", () => {

            // 검색창 비우기
            document.getElementById(
                "searchInput"
            ).value = "";

            // 상세창 숨기기
            document.getElementById(
                "showG"
            ).style.display =
                "none";

            // 기본 페이지 복구
            document.getElementById(
                "page1"
            ).style.display =
                "block";

            document.getElementById(
                "page2"
            ).style.display =
                "none";

            document.getElementById(
                "page3"
            ).style.display =
                "none";

            // 페이지 버튼 다시 보이기
            document.querySelector(
                ".navigation"
            ).style.display =
                "flex";

            // 버튼 숨기기
            document.getElementById(
                "resetBtn"
            ).style.display =
                "none";
        });