      const calendarDays = document.querySelectorAll(".calendar_days"),
      calendarTitle = document.querySelector(".title"),
      leftButton = document.querySelector(".left_button"),
      rightButton = document.querySelector(".right_button"),
      calendar = document.querySelector(".calendar");
      // dateUpdate = document.querySelector(".date_update");


        class Calendar {
            constructor(year, month) {
            this.today = new Date(year, month);
            this.year = this.today.getFullYear(),
            this.month = this.today.getMonth(),
            this.date = this.today.getDate(),
            this.day = this.today.getDay()
        }


        getFirstDay() {
            const firstDate = new Date(this.year, this.month);
            return firstDate.getDay();
        }

        getLastDay() {
            let wholeDays = [];
            if ((this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0)) {
                wholeDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            } else {
                wholeDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            }
            return wholeDays[this.month];
        }

        fillCalendar() {
            this.initCalendar();
            calendarTitle.innerHTML = `${this.year}. ${this.month + 1}`
            const firstDay = this.getFirstDay();
            const lastDay = this.getLastDay();
            let day = 1;
            for (let i = firstDay; i < calendarDays.length; i++) {
                if (day <= lastDay) {
                    calendarDays[i].innerHTML = `<button class = "day_button">${day}</button>`;
                    day++;
                }

            }
        }

        initCalendar() {
            calendarDays.forEach((e) => {
                e.innerHTML = "";
            });
        }


        drawCalendar() {
            let change = 0;
            const today = new Date();
            let calendarInstance = new Calendar(today.getFullYear(), today.getMonth() + change);

            calendarInstance.fillCalendar();

            leftButton.addEventListener("click", (e) => {
                e.stopPropagation();
                change--;
                calendarInstance = new Calendar(today.getFullYear(), today.getMonth() + change);
                calendarInstance.fillCalendar();
                this.updateCalendarStyle();
            });
            rightButton.addEventListener("click", (e) => {
                e.stopPropagation();
                change++;
                calendarInstance = new Calendar(today.getFullYear(), today.getMonth() + change);
                calendarInstance.fillCalendar();
                this.updateCalendarStyle();
            });
        }


        updateCalendarStyle() {
            const dayButtons = document.querySelectorAll(".day_button");
            let firstSelectedDay = 0;
            let lastSelectedDay = 0;



            // 달력 날짜들에 클릭 이벤트 추가
            dayButtons.forEach((element) => {
                element.addEventListener("click", (event) => {
                    event.target.classList.toggle("day_selected");


                    // 선택 일자 타입 변환
                    if (firstSelectedDay === 0) {
                        firstSelectedDay = Number(event.target.innerText);
                    } else {
                        lastSelectedDay = Number(event.target.innerText);
                    }
                });
            });

        }
        handleEvents() {
            this.drawCalendar();
            this.updateCalendarStyle();
        }

    }


    const cal = new Calendar();
    cal.handleEvents();
