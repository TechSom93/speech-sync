// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.scroll-wrapper'),
//     smooth: true
// });

const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

function anim1(){
    gsap.to(".user-card",{
        scrollTrigger:{
            trigger: ".sec1",
            start: '80% 70%',
            end: '100% 50%',
            scrub: true,
            // markers: {
            //     startColor: "white",
            //     endColor: "white",
            //     fontSize: "20px",
            //     indent: 50
            // },
        },
        rotation: 0,
    
    })


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec1",
            // start: "0% 95%",
            // end: "10% 55%",
            start: "+=500s",
            end: "+=500s",
            //start: "10% 95%",  // start  start-scroll
            //end: "20% 100%",  // end  end-scroll
            ease: "power2.inOut",
            scrub: true,
            markers: {
                startColor: "yellow",
                endColor: "violet",
                fontSize: "20px",
                indent: 50
            },
            
            // toggleClass: "tglclass",
            // pin: true
            // rotation: 360,
            // 
            // backgroundColor: "#f00",
            // border: "2px solid #000"
        },
    });
    
    
    tl.to(".sec1-mobile-sec",{
        top: "17.5%",
    },"mobile-animation1")

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec2",
            // start: "0% 95%",
            // end: "10% 55%",
            start: "60% 55%",
            end: "95% 20%",
            //start: "10% 95%",  // start  start-scroll
            //end: "20% 100%",  // end  end-scroll
           
            scrub: true,
            // markers: {
            //     startColor: "yellow",
            //     endColor: "violet",
            //     fontSize: "20px",
            //     indent: 50
            // },
            
            // toggleClass: "tglclass",
            // pin: true
            // rotation: 360,
            // 
            // backgroundColor: "#f00",
            // border: "2px solid #000"
        },
    });
    
    
    tl2.to(".mob-display-img1",{
        transform: "translateY(-100%)",
        opacity: '0',
    },"mobile-animation2")


    let boxScroll4 = gsap.utils.toArray(".mob-display-img2");

    let boxTween4 = gsap.fromTo(boxScroll4, { transform: "translateY(0)" }, {
        transform: "translateY(-100%)",

        scrollTrigger: {
        trigger: ".sec2-new",
        // scroller: ".scrollContainer",
        // scroller: ".scroll-wrapper",
        scrub: true,
        ease: "power2.inOut",
        // markers: {
        //     startColor: "yellow",
        //     endColor: "violet",
        //     fontSize: "20px",
        //     indent: 50
        // },
        start: "30% 85%",
        end: "55% 60%",
        }
    });

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec2-new",
            // start: "0% 95%",
            // end: "10% 55%",
            start: "60% 55%",
             end: "95% 20%",
            //start: "10% 95%",  // start  start-scroll
            //end: "20% 100%",  // end  end-scroll
           
            scrub: true,
            // markers: {
            //     startColor: "yellow",
            //     endColor: "violet",
            //     fontSize: "20px",
            //     indent: 50
            // },
            
        },
    });

    tl3.to(".sec1-mobile-sec",{
        top: "15%",
    },"mobile-animation1")

    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".instant-clarity-sec",
            start: "60% 55%",
             end: "95% 20%",
           
            scrub: true,
            // markers: {
            //     startColor: "yellow",
            //     endColor: "violet",
            //     fontSize: "20px",
            //     indent: 50
            // },
            
        },
    });

    tl4.to(".instant-topsec",{
        opacity: '0',
    },"instant-animation")
    tl4.to(".calling-img-wrapper",{
        opacity: '1',
    },"instant-animation")


    

    let horiScroller = gsap.utils.toArray(".choose-us-sec-wrapper ul li");

    let chooseScroll = gsap.fromTo(horiScroller, { right: '-50%', }, {
        right: '100%',

    scrollTrigger: {
      trigger: ".choose-us-sec-wrapper",
      // scroller: ".scrollContainer",
      scroller: ".scroll-wrapper",
      scrub: true,
      ease: "power2.inOut",
      start: "+=200s",
      end: "+=1000s"
    }
  });

    let horiScroller1 = gsap.utils.toArray(".choose-us-sec-wrapper ul li:nth-child(odd)");

    let chooseScroll1 = gsap.fromTo(horiScroller1, { rotate: 10, }, {
        rotate: 0,

    scrollTrigger: {
      trigger: ".choose-us-sec-wrapper",
      // scroller: ".scrollContainer",
      scroller: ".scroll-wrapper",
      scrub: true,
      ease: "power2.inOut",
      start: "+=200s",
      end: "+=1000s"
    }
  });

  let horiScroller2 = gsap.utils.toArray(".choose-us-sec-wrapper ul li:nth-child(even)");

    let chooseScroll2 = gsap.fromTo(horiScroller2, { rotate: -10, }, {
        rotate: 0,

    scrollTrigger: {
      trigger: ".choose-us-sec-wrapper",
      // scroller: ".scrollContainer",
      scroller: ".scroll-wrapper",
      scrub: true,
      ease: "power2.inOut",
      start: "+=200s",
      end: "+=1000s"
    }
  });

    gsap.to('.choose-us-sec', {
        scrollTrigger: {
          pin: '.choose-us-sec',
          scroller: ".scroll-wrapper",
        //   pinType: 'transform',
          pinSpacing: true,
          end: '+=1500s',
        },
    });


}

function initLocoScroll(){
    scroll = new LocomotiveScroll({
        el: document.querySelector('.scroll-wrapper'),
        smooth: true,
        reloadOnContextChange: true,
        lerp: .1,
        getDirection: true,
        multiplier: 1,
        touchMultiplier: 2,
        tablet: {
          smooth: !1,
          direction: "vertical",
          gestureDirection: "vertical",
          breakpoint: 1024
        },
        smartphone: {
          smooth: !1,
          direction: "vertical",
          gestureDirection: "vertical"
        }
      }),

      new ResizeObserver((() => scroll.update())).observe(
        document.querySelector(".scroll-wrapper")
      ),
      scroll.on("scroll", () => ScrollTrigger.update());

      ScrollTrigger.scrollerProxy('.scroll-wrapper', {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector('.scroll-wrapper').style.transform ? "transform" : "fixed"
      });
    
      ScrollTrigger.defaults({
        scroller: document.querySelector('.scroll-wrapper'),
      });


}

function loadingScreenReveal() {
    const textRotator = selectAll(".outer-span span,.outer-span-img span");
    // const imgUp = selectAll(".outer-span-img span");

    gsap.set(textRotator, { yPercent: 250 });
    // gsap.set(imgUp, { yPercent: 250 });

    const preload = gsap.timeline({ defaults: { duration: 1.34, ease: "myEaseSmooth" } });
    
    preload.to(textRotator, { duration: 1.6, yPercent: 0, rotate: 0, ease: "Expo.easeOut" });
    // preload.to(imgUp, { duration: 1.6, yPercent: 0, rotate: 0, ease: "Expo.easeOut" });

}





/*********/
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
      gsap.registerPlugin(ScrollTrigger);
  
      anim1();
      loadingScreenReveal();

    }, 300);
  
    initLocoScroll();
    scroll.update();
  
  });


// gsap.registerPlugin(ScrollTrigger);



/*
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec1",
        start: "75% 25%",
        end: "100% 55%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: true,
        markers: {
            startColor: "white",
            endColor: "white",
            fontSize: "20px",
            indent: 50
        },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});


// tl.to(".sec1-mobile-sec",{
//     top: "80%",
//     position: 'absolute',
//     // left: "13%"
// },"mobile-animation")

tl.to(".user-card",{
    rotate: "0%",
    // left: "13%"
},"mobile-animation")



const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec3",
        start: "0% 95%",
        end: "50% 50%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: true,
        markers: {
            startColor: "black",
            endColor: "black",
            fontSize: "20px",
            indent: 50
        },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});

tl2.to(".sec1-mobile-sec",{
   
    // left: "13%"
    pin: true
},"mobile-animation1")

// tl2.to(".slice-lemon",{
//     left: "41%",
//     top: "204%",
//     width: "300px",
//     zIndex: "1"
// },"banner-animation1")


tl2.from(".slice-lemon3",{
    left: "-250%",
    top: "60%",
    rotate: "-90deg",
    zIndex: "1"
},"banner-animation1")


tl2.from(".sec3-prod1",{
    right: "-100%",
    top: "120%",
    rotate: "-90deg",
    zIndex: "1"
},"banner-animation1")
*/

