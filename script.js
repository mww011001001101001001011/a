const textOutput = document.getElementById('text-output');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');

let currentLocation = "forestStart";
const gameData = {
    forestStart: {
        text: "Вы находитесь на краю леса. Перед вами темный лес, за ним виднеется гора, а сзади вас - тропа, по которой вы пришли. Что вы будете делать? (в лес, на гору, назад)",
        options: {
            "в лес": "forestPath",
            "на гору": "mountainStart",
            "назад": "village"
        }
    },
    forestPath: {
      text: "Вы идете по темной лесной тропе. Лес становится все темнее и страшнее. Вы чувствуете запах дыма. Вы слышите чьи-то голоса. Хотите продолжить путь или повернуть обратно? (продолжить, обратно)",
      options: {
        "продолжить": "forestEnd",
        "обратно": "forestStart"
      }
    },
     forestEnd: {
      text: "Вы выходите на поляну. В центре поляны горит костер, вокруг которого сидят гномы. Они смотрят на вас с удивлением. Хотите поговорить с ними или убежать? (поговорить, убежать)",
        options: {
            "поговорить": "gnomeTalk",
            "убежать": "forestPath"
         }
    },
    gnomeTalk: {
        text: "Вы подошли к гномам и завели разговор. Они рассказали вам о сокровищах, спрятанных в горах. Гномы щедры и подарили вам немного еды и карту гор. Хотите поблагодарить гномов или продолжить свой путь? (поблагодарить, уйти)",
        options: {
            "поблагодарить": "forestStart",
            "уйти": "mountainStart"
        }
     },
    mountainStart: {
        text: "Вы стоите у подножия горы. Гора кажется неприступной, но вы замечаете тропинку. Хотите подняться на гору или вернуться обратно? (подняться, обратно)",
        options: {
            "подняться": "mountainPath",
            "обратно": "forestStart"
        }
    },
    mountainPath: {
        text: "Вы идете по горной тропе. Вы замечаете пещеру на склоне горы. Хотите войти в пещеру или продолжить путь? (пещера, путь)",
          options: {
            "пещера": "mountainCave",
            "путь": "mountainTop"
        }
    },
    mountainCave: {
      text: "Вы вошли в темную пещеру. Вдали вы видите мерцающий свет. Вы слышите странные звуки. Хотите идти дальше или вернуться обратно? (дальше, обратно)",
         options: {
            "дальше": "mountainTreasure",
            "обратно": "mountainPath"
         }
    },
      mountainTreasure: {
        text: "Вы подходите к мерцающему свету и видите сундук с золотом! Вы нашли сокровище. Вы победили!",
        options: {}
    },
     mountainTop: {
      text: "Вы достигли вершины горы. Отсюда открывается прекрасный вид на весь мир. Однако, у вас нет здесь никаких целей. Вам следует поискать приключения в другом месте.",
      options: {
           "обратно": "mountainPath"
      }
    },
    village: {
        text: "Вы возвращаетесь в деревню, откуда начали свой путь. Вы можете начать новое приключение или отдохнуть здесь. (в лес, на гору, отдых)",
         options: {
            "в лес": "forestStart",
            "на гору": "mountainStart",
             "отдых": "end"
        }
    },
    end: {
         text: "Вы решаете отдохнуть в деревне, ваше приключение закончилось."
    }
};



function updateText() {
    textOutput.textContent = gameData[currentLocation].text;
    userInput.disabled = Object.keys(gameData[currentLocation].options).length === 0;
    userInput.value = "";
    if (userInput.disabled) {
        submitButton.disabled = true;
    } else {
         submitButton.disabled = false;
    }
}

submitButton.addEventListener('click', () => {
    const inputText = userInput.value.toLowerCase();
    const options = gameData[currentLocation].options;

    if (options && options[inputText]) {
        currentLocation = options[inputText];
    } else {
         if (!userInput.disabled) {
        textOutput.textContent += "\nВы ввели неверную команду, попробуйте снова!";
       }
    }
    updateText();
});

updateText(); // Инициализация игры