import { d as attr, e as escape_html, f as attr_class, c as pop, p as push, g as bind_props } from "../../chunks/index.js";
import "clsx";
function Header($$payload) {
  $$payload.out += `<header id="header_container" class="svelte-jbcqps"><h1 id="header_title" class="svelte-jbcqps">Nanashi Mumei Farewell Projects Collection</h1></header>`;
}
function ToggleButton($$payload) {
  $$payload.out += `<div class="toggleSidebarButton transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-center bg-contain bg-no-repeat hover:scale-110 w-45 svelte-1cmrcyl" style="background-image: url('left_arrow.svg');"></div>`;
}
function ProjectPreview($$payload, $$props) {
  let { projectThumbnail, projectTitle } = $$props;
  $$payload.out += `<a${attr("href", `/${projectTitle}`)} class="transition-all hover:scale-110 px-20"><div class="flex flex-col items-center justify-center"><img class="rounded-xl w-60 h-60"${attr("src", projectThumbnail)} alt="Project Thumbnail"> <h3 class="projectTitle svelte-y91y8o">${escape_html(projectTitle)}</h3></div></a>`;
}
function ProjectSelection($$payload, $$props) {
  push();
  $$payload.out += `<div${attr_class(
    `
    projectSelectionContainer
    flex h-screen fixed z-100
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${""}`,
    "svelte-k0xrpr"
  )}>`;
  ToggleButton($$payload);
  $$payload.out += `<!----> <div>`;
  Header($$payload);
  $$payload.out += `<!----> <div class="projectsContainer mt-0 flex justify-around items-center flex-wrap pb-50 pl-32 pr-50 h-full svelte-k0xrpr">`;
  ProjectPreview($$payload, {
    projectThumbnail: "thumb_oh_hi_meetups.jpg",
    projectTitle: "Oh hi meetups"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "thumb_a_new_start.jpg",
    projectTitle: "A New Start Fan Cover"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "moom_spin.gif",
    projectTitle: "Filler Project"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "moom_spin.gif",
    projectTitle: "Filler Project"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "moom_spin.gif",
    projectTitle: "Filler Project"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "moom_spin.gif",
    projectTitle: "Filler Project"
  });
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  const prerender = true;
  $$payload.out += `<div class="flex"><div class="mr-[5%] flex-1">`;
  children($$payload);
  $$payload.out += `<!----></div> `;
  ProjectSelection($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { prerender });
}
export {
  _layout as default
};
