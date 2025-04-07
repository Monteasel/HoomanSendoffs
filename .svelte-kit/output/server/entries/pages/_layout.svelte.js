import { d as attr_class, c as pop, p as push, e as bind_props } from "../../chunks/index.js";
import "clsx";
import { a as attr, e as escape_html } from "../../chunks/attributes.js";
function Header($$payload) {
  $$payload.out += `<header class="flex flex-col justify-center items-center py-5 px-7 w-auto" style="background-color: #674d46;"><h1 class="text-xl text-center font-bold font-[Helvetica] tracking-wide" style="color: #ad603d;">Hooman Sendoff Projects for Nanashi Mumei</h1></header>`;
}
function ToggleButton($$payload) {
  $$payload.out += `<div class="toggleSidebarButton transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-center bg-contain bg-no-repeat hover:scale-110 w-1/8 shrink-0 svelte-1cmrcyl" style="background-image: url('left_arrow.svg');"></div>`;
}
function ProjectPreview($$payload, $$props) {
  let { projectThumbnail, projectTitle, projectRoute } = $$props;
  $$payload.out += `<a${attr("href", `/${projectRoute}`)} class="transition-all hover:scale-110"><div class="flex flex-col items-center justify-center"><img class="rounded-xl w-30 h-30 md:w-60 md:h-60"${attr("src", projectThumbnail)} alt="Project Thumbnail"> <h3 class="projectTitle svelte-y91y8o">${escape_html(projectTitle)}</h3></div></a>`;
}
function ProjectSelection($$payload, $$props) {
  push();
  $$payload.out += `<div${attr_class(
    `
    projectSelectionContainer
    flex h-screen fixed z-100 w-full
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${"translate-x-[87.5%]"}`,
    "svelte-k0xrpr"
  )}>`;
  ToggleButton($$payload);
  $$payload.out += `<!----> <div class="grow-1">`;
  Header($$payload);
  $$payload.out += `<!----> <div class="projectsContainer pt-10 pb-50 min-h-screen flex justify-around items-center flex-wrap svelte-k0xrpr">`;
  ProjectPreview($$payload, {
    projectThumbnail: "img/thumb_oh_hi_meetups.webp",
    projectTitle: "Oh hi meetups",
    projectRoute: "Oh hi meetups"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "img/thumb_project_mumei.webp",
    projectTitle: "Project Mumei",
    projectRoute: "Project Mumei"
  });
  $$payload.out += `<!----> `;
  ProjectPreview($$payload, {
    projectThumbnail: "img/thumb_project_colon_d.webp",
    projectTitle: "Project :D",
    projectRoute: "Project Colon D"
  });
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  const prerender = true;
  $$payload.out += `<div class="flex"><div class="mr-[12.5%] flex-1">`;
  children($$payload);
  $$payload.out += `<!----></div> `;
  ProjectSelection($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { prerender });
}
export {
  _layout as default
};
