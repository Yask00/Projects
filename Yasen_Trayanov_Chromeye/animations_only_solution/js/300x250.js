const docReadyId = setInterval(function () {
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    clearInterval(docReadyId);
    loadImages();
  }
}, 50);

const generateBall = () => {
  const ball = document.createElement("img");
  ball.setAttribute("src", "./img//ball_soccer.png");
  ball.setAttribute("id", "ball");

  return ball;
};

const generateLogo = () => {
  const logoWrapper = document.createElement("div");
  logoWrapper.classList.add("whiteShape");

  const svgLogo = document.createElement("object");
  svgLogo.setAttribute("id", "logo");
  svgLogo.setAttribute("data", "./img/chromeye_logo.svg");
  svgLogo.setAttribute("type", "image/svg+xml");

  logoWrapper.appendChild(svgLogo);

  return logoWrapper;
};

const generateTexts = () => {
  const banner = document.getElementById("banner");

  const text1 = document.createElement("div");
  text1.className = "text1";
  const text1Text = "WE ARE CHROMEYE";
  text1.innerHTML = text1Text;
  banner.appendChild(text1);

  const text2 = document.createElement("div");
  text2.className = "text2";
  const text2Text =
    "We are a European digital studio which gradually grew to transform into a global digital agency.";
  text2.innerHTML = text2Text;
  banner.appendChild(text2);
}

function loadImages() {
  const banner = document.getElementById("banner");

  generateTexts();
  banner.appendChild(generateBall());
  banner.appendChild(generateLogo());

  const svgLogo = document.querySelector("#logo");

  svgLogo.addEventListener(
    "load",
    function () {
      animation();
    },
    false
  );
}

function animation() {
  const banner = document.getElementById("banner");
  banner.style.opacity = 1;

  const firstText = banner.querySelector(".text1");
  const secondText = banner.querySelector(".text2");
  const secondTextLetters = gsap.utils.toArray(secondText);
  const timePerCharacter = 0.02;

  //new SplitText(firstText, {type: "chars,words,lines", position: "absolute"});
  // .... no split text available for free for the first text animation

  const logoWrapper = banner.querySelector(".whiteShape");
  const svgLogo = document.getElementById("logo");
  const svgDoc = svgLogo.contentDocument;
  const logoImage = svgDoc.getElementById("svgLogo");
  const logoText = svgDoc.getElementById("svgText");

  const ball = banner.querySelector("#ball");

  const tween = gsap.timeline();

  tween.set(logoText, {
    opacity: 0,
  });
  tween.set(logoImage, {
    x: "50px",
    scale: 1.25,
    opacity: 0,
    yoyo: true,
  });
  tween.to(logoImage, {
    // ?? create on the flight like texts??
    opacity: 1,
    duration: 1,
    ease: "power1.in",
  });
  tween.to(logoText,{
      opacity: 1,
      duration: 0.5,
    },
    1
  );
  tween.to(logoImage,{
      x: "0",
      scale: 1,
      duration: 0.5,
    },
    1
  );
  tween.to(logoWrapper,{
      y: "200px",
      height: "50px",
    },
    1.5
  );
  tween.to(svgLogo,{
      height: "40px",
      width: "100px",
    },
    1.5
  );
  tween.to(ball,{
      rotation: 360,
      scale: 1.75,
      duration: 1,
    },
    2
  );
  tween.to(ball,{
      x: "115",
      y: "190",
      duration: 0.5,
    },
    2
  );
  tween.to(ball,{
      x: "350",
      y: "50",
      duration: 1,
    },
    2.5
  );
  gsap.to(firstText,{
      duration: 1,
      opacity: 1,
      left: "20px",
    },
    3.5
  );
  secondTextLetters.forEach((el) => {
    tween.from(
      el,
      {
        opacity: 1,
        text: "",
        duration: el.innerHTML.length * timePerCharacter,
        ease: "none",
      },
      4.5
    );
  });
}
