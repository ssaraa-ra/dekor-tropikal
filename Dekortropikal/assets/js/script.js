"use strict";

/**
 * navbar toggle
 */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

document.querySelectorAll(".question").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    parent.classList.toggle("active");
  });
});

function toggleAnswer(question) {
  const faqItem = question.closest(".faq-item");
  faqItem.classList.toggle("open");
}

$(document).ready(function () {
  $("[unique-script-id='w-w-dm-id'] .img .desc").hide();

  $("[unique-script-id='w-w-dm-id'] .img").mouseenter(function (item) {
    $("[unique-script-id='w-w-dm-id'] .img .overlay").removeClass(
      "overlay-visible"
    );
    $("[unique-script-id='w-w-dm-id'] .img .desc").hide();
    $("#" + $(item.currentTarget).attr("id") + " .overlay").addClass(
      "overlay-visible"
    );
    $("#" + $(item.currentTarget).attr("id") + " .desc").show();
    console.log(item.currentTarget);
  });
  $("[unique-script-id='w-w-dm-id'] .tab").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $("[unique-script-id='w-w-dm-id'] .img").show("5000");
    } else {
      $("[unique-script-id='w-w-dm-id'] .img")
        .not("." + value)
        .hide("5000");
      $("[unique-script-id='w-w-dm-id'] .img")
        .filter("." + value)
        .show("5000");
    }
  });

  $("[unique-script-id='w-w-dm-id'] .tab").click(function () {
    $(this).addClass("tab-active").siblings().removeClass("tab-active");
  });
});
