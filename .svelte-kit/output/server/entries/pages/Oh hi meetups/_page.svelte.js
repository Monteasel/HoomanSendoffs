import "clsx";
import { i as attr_style, f as attr_class, d as attr, j as stringify, e as escape_html } from "../../../chunks/index.js";
function Header($$payload) {
  $$payload.out += `<header id="header_container" class="svelte-euo1sg"><h1 id="header_title" class="svelte-euo1sg">Nanashi Mumei oh hi meetups</h1> <p id="header_subtitle" class="svelte-euo1sg">Oh hi's from around the world</p></header>`;
}
function MeetupCard($$payload, $$props) {
  let { pic, vid, picPlacement } = $$props;
  let imgWidth = 0;
  let imgHeight = 0;
  let vidWidth = 0;
  let vidHeight = 0;
  let biggestWidth = (() => {
    let biggestMediaWidth = Math.max(imgWidth, vidWidth);
    return biggestMediaWidth > 600 ? 600 : biggestMediaWidth;
  })();
  let biggestHeight = (() => {
    let biggestMediaHeight = Math.max(imgHeight, vidHeight);
    return biggestMediaHeight;
  })();
  $$payload.out += `<div class="flex-3"><div class="flex">`;
  if (picPlacement === "right") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-end mb-2"${attr_style(`margin-left: ${stringify(biggestWidth / 25)}px;`)}><button class="cycleMediaButton w-20 h-12 mb-22 shadow-lg rounded-full bg-cover bg-center transition-all opacity-90 cursor-pointer hover:scale-110 svelte-nn2zwy" style="background-image: url('right-arrow.svg');" aria-label="Cycle to next media"></button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="relative"${attr_style(`width: ${stringify(biggestWidth)}px; height: ${stringify(biggestHeight / 3)}px`)}><div${attr_class(
    `absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${"z-20"} -rotate-4`,
    "svelte-nn2zwy"
  )}${attr_style(`width: ${stringify(imgWidth)}px; height: ${stringify(imgHeight)}px; max-width: 300px; max-height: 30px; left: 50%; top: 50%;`)}><img${attr("src", pic)} alt="Hooman Meetup" class="bg-white rounded-lg shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-all" style="margin: auto; width: 100%; transform: translate(-50%, -50%);" onload="this.__e=event"></div> <div${attr_class(
    `absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${"z-10 translate-y-4 translate-x-4"} rotate-2`,
    "svelte-nn2zwy"
  )}${attr_style(`width: ${stringify(vidWidth)}px; height: ${stringify(vidHeight)}px; max-width: 700px; max-height: 100px; left: 50%; top: 50%;`)}><video${attr("src", vid)} controls loop class="bg-white rounded-lg shadow-xl border-4 border-white" style="transform: translate(-50%, -50%);"></video></div></div> `;
  if (picPlacement === "left") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-end mb-2"${attr_style(`margin-left: ${stringify(biggestWidth / 8)}px;`)}><button class="cycleMediaButton w-20 h-12 mb-22 shadow-lg rounded-full bg-cover bg-center transition-all opacity-90 cursor-pointer hover:scale-110 svelte-nn2zwy" style="background-image: url('right-arrow.svg');" aria-label="Cycle to next media"></button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function MeetupMessage($$payload, $$props) {
  let { message } = $$props;
  let maxRot = 4;
  let rotateAmount = (Math.random() - 0.5) * 2 * maxRot;
  $$payload.out += `<div class="flex justify-center items-center bg-center bg-contain bg-no-repeat text-center mx-24"${attr_style(` border-image: url('paper.png') 50 40 30 40 fill / auto; rotate: ${stringify(rotateAmount)}deg;`)}><h1 style="font-family: 'Caveat'; font-size: 1.3rem" class="pt-14 pr-8 pb-16 pl-5">${escape_html(message)}</h1></div>`;
}
function MeetupCardAndMessageContainer($$payload, $$props) {
  let { pic, vid, picPlacement, message } = $$props;
  $$payload.out += `<div class="mb-24"><div class="flex justify-center items-center">`;
  if (picPlacement === "left") {
    $$payload.out += "<!--[-->";
    MeetupCard($$payload, { pic, vid, picPlacement });
    $$payload.out += `<!----> `;
    MeetupMessage($$payload, { message });
    $$payload.out += `<!---->`;
  } else if (picPlacement === "right") {
    $$payload.out += "<!--[1-->";
    MeetupMessage($$payload, { message });
    $$payload.out += `<!----> `;
    MeetupCard($$payload, { pic, vid, picPlacement });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
}
function MainContainer($$payload) {
  $$payload.out += `<div class="px-20">`;
  MeetupCardAndMessageContainer($$payload, {
    pic: "moom_nightmare.webp",
    vid: "oh_hi.mp4",
    picPlacement: "left",
    message: "oh hi Mooms, this is a test message to test out this really funny site. this test message is really just for testing purposes so this might already be long enough to test out a longer message."
  });
  $$payload.out += `<!----> `;
  MeetupCardAndMessageContainer($$payload, {
    pic: "moomtest.webp",
    vid: "moom_spin.mp4",
    picPlacement: "right",
    message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  });
  $$payload.out += `<!----> `;
  MeetupCardAndMessageContainer($$payload, {
    pic: "moom_nightmare.webp",
    vid: "oh_hi.mp4",
    picPlacement: "left",
    message: "oh hi Mooms, this is a test message to test out this really funny site. this test message is really just for testing purposes so this might already be long enough to test out a longer message."
  });
  $$payload.out += `<!----> `;
  MeetupCardAndMessageContainer($$payload, {
    pic: "moomtest.webp",
    vid: "moom_spin.mp4",
    picPlacement: "right",
    message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  });
  $$payload.out += `<!----> `;
  MeetupCardAndMessageContainer($$payload, {
    pic: "moom_nightmare.webp",
    vid: "oh_hi.mp4",
    picPlacement: "left",
    message: "oh hi Mooms, this is a test message to test out this really funny site. this test message is really just for testing purposes so this might already be long enough to test out a longer message."
  });
  $$payload.out += `<!----> `;
  MeetupCardAndMessageContainer($$payload, {
    pic: "moomtest.webp",
    vid: "moom_spin.mp4",
    picPlacement: "right",
    message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="min-h-screen" style="background-image: url('pinboard.jpg'); /* background-color: #b69687; */ margin: 0; min-height: 100vh;">`;
  Header($$payload);
  $$payload.out += `<!----> `;
  MainContainer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
