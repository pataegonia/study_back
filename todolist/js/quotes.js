const quotes = [
    {
        quote: "목적을 이루기 위해서 오랜 인내를 하기보다는 눈부신 노력을 하는편이 쉽다. 성공하는 데는 두 가지 길밖에 없다. 하나는 자신의 근면 하나는 타인의 어리석음.",
        author: "Jean de La Bruyère",
    },
    {
        quote: "사람을 강하게 만드는 것은 사람이 하는 일이 아니라, 하고자 노력하는 것이다.",
        author: "Ernest Miller Hemingway",
    },
    {
        quote: "예부터 오늘에 이르기까지 인내와 노력이 따르지 않고, 우러름을 받은 사람은 없다.",
        author: "Isaac Newton",
    },
    {
        quote: "승리는 노력과 사람에 의해서만 얻어진다. 승리는 가장 끈기있게 노력하는 사람에게 간다. 어떤 고난의 한가운데 있더라도 노력으로 정복해야 한다.",
        author: "Napoléon I",
    },
    {
        quote: "우리 인생은 우리들이 노력한 만큼 가치가 있다.",
        author: "François Mauriac",
    },
    {
        quote: "제주가 비상하고 뛰어나더라도 노력하지 않으면 쓸모없는 것이다.",
        author: "Michel Eyquem de Montaigne",
    },
    {
        quote: "항상 좋은 목적을 잃지 않고 노력을 계속하는 한 최후에는 반드시 구제된다.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "그대의 하루하루를 그대의 마지막 날이라고 생각하라",
        author: "Quintus Horatius Flaccus",
    },
    {
        quote: "성공은 높은 점프도 긴 점프도 아니다. 성공은 마라톤의 발걸음들이다.",
        author: "Oliver Cromwell",
    },
    {
        quote: "나는 세계 최고의 선수다. 자기 자신에 대한 믿음이 없으면 그 사람은 끝난 것이다.",
        author: "Zlatan Ibrahimović",
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQoute = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQoute.quote;
author.innerText = todayQoute.author;