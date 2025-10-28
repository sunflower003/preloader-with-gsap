gsap.registerPlugin(DrawSVGPlugin);

// Khóa cuộn trang khi preloader đang hoạt động
gsap.set("body", { overflow: "hidden" });

const loaderNumber = document.querySelector(".loader-number");
const loaderLogo = document.querySelector(".loader-logo");
const logoPaths = document.querySelectorAll(".loader-logo path");
const preloader = document.querySelector(".preloader");
const mainContent = document.querySelector(".main-content");

// Tạo GSAP Timeline
const tl = gsap.timeline();

// Biến để dễ dàng điều chỉnh hiệu ứng
const slideDuration = 0.3;
const slideEase = "power2.out";
const slideEaseOut = "power2.in";

// Đảm bảo số bắt đầu ở vị trí 0
tl.set(loaderNumber, { y: "0%" });

// --- Chuyển sang "25" ---
tl.to(loaderNumber, { y: "-100%", duration: slideDuration, ease: slideEaseOut }, "+=0.4"); // "+=0.4" tức là sau khi animation trước kết thúc thì 0.4 giây sau mới bắt đầu animation này
tl.set(loaderNumber, { innerText: "25", y: "100%" });
tl.to(loaderNumber, { y: "0%", duration: slideDuration, ease: slideEase });

// --- Chuyển sang "65" ---
tl.to(loaderNumber, { y: "-100%", duration: slideDuration, ease: slideEaseOut }, "+=0.3");
tl.set(loaderNumber, { innerText: "65", y: "100%" });
tl.to(loaderNumber, { y: "0%", duration: slideDuration, ease: slideEase });

// --- Chuyển sang "98" ---
tl.to(loaderNumber, { y: "-100%", duration: slideDuration, ease: slideEaseOut }, "+=0.4");
tl.set(loaderNumber, { innerText: "98", y: "100%" });
tl.to(loaderNumber, { y: "0%", duration: slideDuration, ease: slideEase });

// --- Chuyển sang "99" ---
tl.to(loaderNumber, { y: "-100%", duration: slideDuration, ease: slideEaseOut }, "+=0.2");
tl.set(loaderNumber, { innerText: "99", y: "100%" });
tl.to(loaderNumber, { y: "0%", duration: slideDuration, ease: slideEase });


// -----------------------------------------------------
// BẮT ĐẦU CHUỖI ANIMATION KẾT THÚC
// -----------------------------------------------------

tl.to(loaderNumber, {
    opacity: 0,
    duration: 0.3,
    ease: "power1.in",
    delay: 0.5
});

// Logo SVG hiện ra
tl.to(loaderLogo, { 
    opacity: 1,
    duration: 0.5
 }, "<" ); // "<": animation này bắt đầu cùng lúc với animation trước đó

 // Vẽ logo SVG theo path
tl.from(logoPaths, {
    drawSVG: "0%", // Bắt đầu vẽ từ 0%
    duration: 1.5,
    ease: "power2.inOut",
    stagger: 0.1
});

// Tô màu logo SVG
tl.to(logoPaths, {
    fill: "white",
    duration: 0.5,
    ease: "power1.inOut",
}, "-=0.5" ); // Bắt đầu trước khi animation vẽ kết thúc 0.5s


// Đẩy preloader lên trên và hiển thị nội dung chính
tl.to(preloader, {
    y: "-100%",
    duration: 1.2,
    ease: "power3.inOut",
    delay: 0.5 // Chờ 0.5s sau khi logo vẽ xong
});

// Mở khoá cuộn trang
tl.set("body", { overflow: "auto" }, "-=0.5" ); // Bắt đầu khi preloader đang trượt lên

// Clear preloader sau khi animation kết thúc
tl.set(preloader, { display: "none" });
