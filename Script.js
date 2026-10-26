//Album details js
const memberData = {
  jisoo: {
    name: "JISOO",
    realName: "Kim Ji-soo (김지수)",
    role: "Lead Vocalist, Visual",
    birthday: "January 3, 1995",
    nationality: "South Korean",
    height: "162 cm (5'4\")",
    about: "Kim Ji-soo, known mononymously as Jisoo, is a South Korean singer and actress. She is a member of the girl group BLACKPINK formed by YG Entertainment. Jisoo is known for her elegant visuals and powerful vocals. She made her solo debut with the single album 'ME' in 2023, featuring the hit song 'FLOWER'. As the eldest member of BLACKPINK, she brings maturity and charm to the group. Beyond music, Jisoo has also ventured into acting, starring in the JTBC drama 'Snowdrop' in 2021.",
    mainImage: "BLACKPINK_PHOTOS/jisoo_photo_main.jpg",
    galleryImages: [
      "BLACKPINK_PHOTOS/jisoo_photo1.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo2.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo3.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo4.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo5.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo6.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo7.jpg",
      "BLACKPINK_PHOTOS/jisoo_photo8.jpg"
    ],
    videos: [
      {
        title: "JISOO - 'FLOWER' M/V",
        thumbnail: "BLACKPINK_PHOTOS/flower_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=YudHcBIxlYw"
      },
      {
        title: "JISOO - 'All Eyes On Me' Ft. Zayn",
        thumbnail: "BLACKPINK_PHOTOS/alleyesonme_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=EN1tMeXQii0"
      }
    ]
  },
  jennie: {
    name: "JENNIE",
    realName: "Jennie Kim (제니)",
    role: "Main Rapper, Lead Vocalist",
    birthday: "January 16, 1996",
    nationality: "South Korean",
    height: "163 cm (5'4\")",
    about: "Jennie Kim, known mononymously as Jennie, is a South Korean singer and rapper. She debuted as a member of BLACKPINK in 2016 and made her solo debut in 2018 with the single 'SOLO', which became a massive hit. Often called 'Human Chanel' due to her fashion influence, Jennie is known for her fierce stage presence and versatile talents. She has become a global fashion icon and brand ambassador for luxury brands. Her rap skills and vocal abilities make her one of the most well-rounded performers in K-pop.",
    mainImage: "BLACKPINK_PHOTOS/jennie_photo_main.jpg",
    galleryImages: [
      "BLACKPINK_PHOTOS/jennie_photo1.jpg",
      "BLACKPINK_PHOTOS/jennie_photo2.jpg",
      "BLACKPINK_PHOTOS/jennie_photo3.jpg",
      "BLACKPINK_PHOTOS/jennie_photo4.jpg",
      "BLACKPINK_PHOTOS/jennie_photo5.jpg",
      "BLACKPINK_PHOTOS/jennie_photo6.jpg",
      "BLACKPINK_PHOTOS/jennie_photo7.jpg",
      "BLACKPINK_PHOTOS/jennie_photo8.jpg"
    ],
    videos: [
      {
        title: "JENNIE - 'SOLO' M/V",
        thumbnail: "BLACKPINK_PHOTOS/solo_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=b73BI9eUkjM"
      },
      {
        title: "JENNIE - 'You & Me' M/V",
        thumbnail: "BLACKPINK_PHOTOS/youandme_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=AHX0TGFbJ3M"
      }
    ]
  },
  rose: {
    name: "ROSÉ",
    realName: "Park Chae-young (박채영)",
    role: "Main Vocalist, Lead Dancer",
    birthday: "February 11, 1997",
    nationality: "South Korean, New Zealand",
    height: "168 cm (5'6\")",
    about: "Roseanne Park, known professionally as Rosé, is a Korean-New Zealand singer and dancer based in South Korea. Born in New Zealand and raised in Australia, Rosé brings an international flair to BLACKPINK. She is known for her unique vocal tone, often described as husky and soulful. Rosé made her solo debut in 2021 with the single album 'R', featuring 'On The Ground' and 'Gone'. She is also skilled at playing the guitar and piano, often incorporating these instruments into her performances.",
    mainImage: "BLACKPINK_PHOTOS/rose_photo_main.jpg",
    galleryImages: [
      "BLACKPINK_PHOTOS/rose_photo1.jpg",
      "BLACKPINK_PHOTOS/rose_photo2.jpg",
      "BLACKPINK_PHOTOS/rose_photo3.jpg",
      "BLACKPINK_PHOTOS/rose_photo4.jpg",
      "BLACKPINK_PHOTOS/rose_photo5.jpg",
      "BLACKPINK_PHOTOS/rose_photo6.jpg",
      "BLACKPINK_PHOTOS/rose_photo7.jpg",
      "BLACKPINK_PHOTOS/rose_photo8.jpg"
    ],
    videos: [
      {
        title: "ROSÉ - 'On The Ground' M/V",
        thumbnail: "BLACKPINK_PHOTOS/ontheground_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=CKZvWhCqx1s"
      },
      {
        title: "ROSÉ - 'Gone' M/V",
        thumbnail: "BLACKPINK_PHOTOS/gone_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=K9_VFxzCuQ0"
      }
    ]
  },
  lisa: {
    name: "LISA",
    realName: "Lalisa Manobal (ลลิสา มโนบาล)",
    role: "Main Dancer, Lead Rapper, Sub-Vocalist, Maknae",
    birthday: "March 27, 1997",
    nationality: "Thai",
    height: "166.5 cm (5'5.5\")",
    about: "Lalisa Manobal, known mononymously as Lisa, is a Thai rapper, singer and dancer based in South Korea. She is the first and only non-Korean member of BLACKPINK and is widely recognized for her exceptional dancing skills. Lisa made her solo debut in 2021 with the single album 'LALISA', which broke numerous records. She holds the Guinness World Record for most Instagram followers for a K-pop artist. Known for her powerful dance performances and charismatic stage presence, Lisa has become a global icon and a role model for many aspiring artists.",
    mainImage: "BLACKPINK_PHOTOS/lisa_photo_main.jpg",
    galleryImages: [
      "BLACKPINK_PHOTOS/lisa_photo1.jpg",
      "BLACKPINK_PHOTOS/lisa_photo2.jpg",
      "BLACKPINK_PHOTOS/lisa_photo3.jpg",
      "BLACKPINK_PHOTOS/lisa_photo4.jpg",
      "BLACKPINK_PHOTOS/lisa_photo5.jpg",
      "BLACKPINK_PHOTOS/lisa_photo6.jpg",
      "BLACKPINK_PHOTOS/lisa_photo7.jpg",
      "BLACKPINK_PHOTOS/lisa_photo8.jpg"
    ],
    videos: [
      {
        title: "LISA - 'LALISA' M/V",
        thumbnail: "BLACKPINK_PHOTOS/lalisa_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=awkkyBH2zEo"
      },
      {
        title: "LISA - 'MONEY' M/V",
        thumbnail: "BLACKPINK_PHOTOS/money_mv.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=dNCWe_6HAM8"
      }
    ]
  }
};

function goToMemberPage(memberName) {
  localStorage.setItem('selectedMember', memberName);
  window.location.href = 'MemberDetail.html';
}

function loadMemberData() {
  const selectedMember = localStorage.getItem('selectedMember');
  
  if (selectedMember && memberData[selectedMember]) {
    const member = memberData[selectedMember];

    //document.getElementById('memberNameLarge').textContent = member.name;
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberRealName').innerHTML = `<strong>Real Name:</strong> ${member.realName}`;
    document.getElementById('memberRole').innerHTML = `<strong>Position:</strong> ${member.role}`;
    document.getElementById('memberBirthday').innerHTML = `<strong>Birthday:</strong> ${member.birthday}`;
    document.getElementById('memberNationality').innerHTML = `<strong>Nationality:</strong> ${member.nationality}`;
    document.getElementById('memberHeight').innerHTML = `<strong>Height:</strong> ${member.height}`;
    document.getElementById('memberAbout').textContent = member.about;

    const mainImageDiv = document.getElementById('memberMainImage');
    if (mainImageDiv) {
      mainImageDiv.style.backgroundImage = `url('${member.mainImage}')`;
    }

    member.galleryImages.forEach((imgSrc, index) => {
      const galleryItem = document.getElementById(`galleryImg${index + 1}`);
      if (galleryItem) {
        galleryItem.style.backgroundImage = `url('${imgSrc}')`;
      }
    });

    if (member.videos[0]) {
      const videoThumb1 = document.getElementById('videoThumb1');
      if (videoThumb1) {
        videoThumb1.style.backgroundImage = `url('${member.videos[0].thumbnail}')`;
      }
      document.getElementById('clipTitle1').textContent = member.videos[0].title;
      document.getElementById('videoLink1').href = member.videos[0].youtubeUrl;
    }
    
    if (member.videos[1]) {
      const videoThumb2 = document.getElementById('videoThumb2');
      if (videoThumb2) {
        videoThumb2.style.backgroundImage = `url('${member.videos[1].thumbnail}')`;
      }
      document.getElementById('clipTitle2').textContent = member.videos[1].title;
      document.getElementById('videoLink2').href = member.videos[1].youtubeUrl;
    }

    document.title = `BLACKPINK | ${member.name}`;
  }
}

let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.gallery_slide');
  const indicators = document.querySelectorAll('.indicator');
  
  if (!slides.length) return;
  
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  
  slides[currentSlideIndex].classList.add('active');
  
  if (indicators[currentSlideIndex]) {
    indicators[currentSlideIndex].classList.add('active');
  }
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
  resetSlideInterval();
}

function currentSlide(index) {
  showSlide(index);
  resetSlideInterval();
}

let slideInterval = setInterval(() => {
  changeSlide(1);
}, 5000);

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  const memberCards = document.querySelectorAll('.member_card');
  memberCards.forEach(card => {
    card.style.cursor = 'pointer';
  });
  
  const prevBtn = document.querySelector('.gallery_prev');
  const nextBtn = document.querySelector('.gallery_next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => resetSlideInterval());
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => resetSlideInterval());
  }
  
  showSlide(0);
  
  const albumCards = document.querySelectorAll('.album_card');
  albumCards.forEach(card => {
    card.style.cursor = 'pointer';
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    changeSlide(-1);
    resetSlideInterval();
  } else if (event.key === 'ArrowRight') {
    changeSlide(1);
    resetSlideInterval();
  }
});

// For album detail js
const albumData = {
  'the-album': {
    title: "THE ALBUM",
    releaseDate: "October 2, 2020",
    label: "YG Entertainment / Interscope Records",
    genre: "K-pop, Pop, Hip-Hop, R&B",
    language: "Korean, English",
    totalTracks: 8,
    coverImage: "BLACKPINK_PHOTOS/Album_TheAlbum.jpg",
    description: "THE ALBUM is the debut studio album by South Korean girl group BLACKPINK. It features collaborations with Selena Gomez and Cardi B, showcasing the group's versatility and global appeal. The album debuted at number two on the US Billboard 200, making BLACKPINK the highest-charting female Korean act on the chart.",
    tracklist: [
      "How You Like That",
      "Ice Cream (with Selena Gomez)",
      "Pretty Savage",
      "Bet You Wanna (feat. Cardi B)",
      "Lovesick Girls",
      "Crazy Over You",
      "Love To Hate Me",
      "You Never Know"
    ],
    links: {
      spotify: "https://open.spotify.com/album/2gNPnKP1PDkB5SZz3IMKuX?si=rbpJATHsRcWsxTqabZzuFQ",
      youtube: "https://www.youtube.com/watch?v=32si5cfrCNc&list=OLAK5uy_k1kEJCk_CbtFpLGyIptQnnozpsTMyhiTA&pp=0gcJCbYEOCosWNin"
    }
  },
  'born-pink': {
    title: "BORN PINK",
    releaseDate: "September 16, 2022",
    label: "YG Entertainment / Interscope Records",
    genre: "K-pop, Pop, Hip-Hop, EDM",
    language: "Korean, English",
    totalTracks: 8,
    coverImage: "BLACKPINK_PHOTOS/Album_BornPink.jpg",
    description: "BORN PINK is the second studio album by BLACKPINK. The album showcases the group's signature sound blending pop, hip-hop, and EDM elements. It features the lead singles 'Pink Venom' and 'Shut Down', both of which achieved commercial success worldwide. The album debuted at number one on multiple charts globally.",
    tracklist: [
      "Pink Venom",
      "Shut Down",
      "Typa Girl",
      "Yeah Yeah Yeah",
      "Hard to Love",
      "The Happiest Girl",
      "Tally",
      "Ready For Love"
    ],
    links: {
      spotify: "https://open.spotify.com/album/0S4pP8MBY9p7ngFWIZQAJv?si=Q9Zv5fSaS9ex_97Ar6d0pQ",
      youtube: "https://www.youtube.com/watch?v=gQlMMD8auMs&list=OLAK5uy_nqFlTmDaFi5FSUCjjtTOfdk3G5-TExj_U"
    }
  },

  'square-up': {
    title: "SQUARE UP",
    releaseDate: "June 15, 2018",
    label: "YG Entertainment",
    genre: "K-pop, EDM, Trap, Pop",
    language: "Korean, English",
    totalTracks: 4,
    coverImage: "BLACKPINK_PHOTOS/Album_SquareUp.jpg",
    description: "SQUARE UP is the first mini-album by BLACKPINK. The album features the hit single 'DDU-DU DDU-DU', which became the highest-charting song by a Korean girl group on the Billboard Hot 100 at the time. The music video for the title track broke multiple YouTube records.",
    tracklist: [
      "DDU-DU DDU-DU",
      "Forever Young",
      "Really",
      "See U Later"
    ],
    links: {
      spotify: "https://open.spotify.com/album/6yetqbA9vli7RLoUWYZLsq?si=-4PKimvNTaS1VQuaC9npxA",
      youtube: "https://www.youtube.com/watch?v=fpimnj4SNjQ&list=OLAK5uy_l0cnn87qW9xohuWoYW2eBQ3HPqc4oElRU"
    }
  },
  'kill-this-love': {
    title: "KILL THIS LOVE",
    releaseDate: "April 5, 2019",
    label: "YG Entertainment / Interscope Records",
    genre: "K-pop, EDM, Trap, Pop",
    language: "Korean, English",
    totalTracks: 5,
    coverImage: "BLACKPINK_PHOTOS/Album_KillThisLove.jpg",
    description: "KILL THIS LOVE is the second mini-album by BLACKPINK. The title track broke multiple YouTube records upon release, garnering 56.7 million views within 24 hours. The album solidified BLACKPINK's position as a global phenomenon and showcased their musical evolution.",
    tracklist: [
      "Kill This Love",
      "Don't Know What To Do",
      "Kick It",
      "Hope Not",
      "DDU-DU DDU-DU (Remix)"
    ],
    links: {
      spotify: "https://open.spotify.com/album/3qw2vm3uqKT3EIg95wbg83?si=yKuZdy21RJqE2mTHTY9zSw",
      youtube: "https://www.youtube.com/watch?v=2S24-y0Ij3Y&list=OLAK5uy_maetTqjROCXs6zif1eheTirJl7_h7Xhc4"
    }
  },
  'blackpink': {
    title: "BLACKPINK",
    releaseDate: "August 30, 2017",
    label: "YGEX",
    genre: "K-pop, J-pop, EDM",
    language: "Japanese, Korean",
    totalTracks: 8,
    coverImage: "BLACKPINK_PHOTOS/Album_BlackPink.jpg",
    description: "BLACKPINK is the Japanese debut extended play by BLACKPINK. Released in Japan, it includes Japanese versions of their Korean hits along with original Japanese tracks. This marked BLACKPINK's successful entry into the Japanese music market.",
    tracklist: [
      "Boombayah (Japanese ver.)",
      "Whistle (Japanese ver.)",
      "Playing with Fire (Japanese ver.)",
      "Stay (Japanese ver.)",
      "As If It's Your Last (Japanese ver.)",
      "Whistle (Acoustic ver.)",
      "Boombayah",
      "Whistle"
    ],
    links: {
      spotify: "https://open.spotify.com/album/6vl7a0PooHBuDRLrtNeUL0?si=eZS5C0niQ3ueJ93q41oB3A",
      youtube: "https://www.youtube.com/watch?v=bwmSjveL3Lc&list=OLAK5uy_k5p8qtearzZaylUDbCQoTy61ot6_Vf2bA&pp=0gcJCbYEOCosWNin"
    }
  },

  'square-one': {
    title: "SQUARE ONE",
    releaseDate: "August 8, 2016",
    label: "YG Entertainment",
    genre: "K-pop, Pop, Hip-Hop",
    language: "Korean",
    totalTracks: 2,
    coverImage: "BLACKPINK_PHOTOS/Album_SquareOne.jpg",
    description: "SQUARE ONE is the debut single album by BLACKPINK. The album features 'Whistle' and 'Boombayah', both of which became instant hits and introduced BLACKPINK's unique style to the world. Both songs topped Korean music charts simultaneously, a rare achievement for debut artists.",
    tracklist: [
      "Whistle",
      "Boombayah"
    ],
    links: {
      spotify: "https://open.spotify.com/album/0FOOodYRlj7gzh7q7IjmNZ?si=kaUe55gGS4iRV1eKOaLIug",
      youtube: "https://www.youtube.com/watch?v=dISNgvVpWlo&list=OLAK5uy_kxTB9blaRyc3SiL3Fl_rAc-sxEGxsJ9Fg"
    }
  },
  'square-two': {
    title: "SQUARE TWO",
    releaseDate: "November 1, 2016",
    label: "YG Entertainment",
    genre: "K-pop, Pop, EDM",
    language: "Korean",
    totalTracks: 2,
    coverImage: "BLACKPINK_PHOTOS/Album_SquareTwo.jpg",
    description: "SQUARE TWO is the second single album by BLACKPINK. Released just three months after their debut, it features 'Playing with Fire' and 'Stay', showcasing the group's ability to deliver both powerful performances and emotional ballads.",
    tracklist: [
      "Playing with Fire",
      "Stay"
    ],
    links: {
      spotify: "https://open.spotify.com/album/2Fna4Tb7fme5aHsNMJtVtp?si=355a9Fc-T1yPTA3c1WQjZg",
      youtube: "https://www.youtube.com/watch?v=9pdj4iJD08s&list=OLAK5uy_nWtqS0LLZCWXjwR35LaVP-zM_KdiRYqpw"
    }
  },
  'as-if-its-your-last': {
    title: "AS IF IT'S YOUR LAST",
    releaseDate: "June 22, 2017",
    label: "YG Entertainment",
    genre: "K-pop, EDM, Pop",
    language: "Korean",
    totalTracks: 1,
    coverImage: "BLACKPINK_PHOTOS/Album_AsIFYoureLast.jpg",
    description: "AS IF IT'S YOUR LAST is a digital single by BLACKPINK. The song became one of their biggest hits, showcasing a more upbeat and vibrant sound. It was BLACKPINK's first song to surpass 100 million views on YouTube within a month of release.",
    tracklist: [
      "As If It's Your Last"
    ],
    links: {
      spotify: "https://open.spotify.com/album/7ikmjsvRzDRzxHN0KXSQdv?si=CfX1PsPeQkCx1q6VOlwzAA",
      youtube: "https://www.youtube.com/watch?v=Amq-qlqbjYA&list=OLAK5uy_lYYi3rKsoMr9AX1TUIsipmzp5UdGoSgYU"
    }
  },
  'ddu-du-ddu-du': {
    title: "DDU-DU DDU-DU",
    releaseDate: "December 5, 2018",
    label: "YGEX",
    genre: "K-pop",
    language: "Korean",
    totalTracks: 1,
    coverImage: "BLACKPINK_PHOTOS/Album_DuDuDu.png",
    description: "DDU-DU DDU-DU is the record-breaking lead single from BLACKPINK’s first Korean physical EP, SQUARE UP. Characterized by its powerful trap beats and iconic \"finger gun\" choreography, the song solidified BLACKPINK's status as a global powerhouse, becoming the first K-pop group music video to surpass one billion views on YouTube.",
    tracklist: [
      "DDU-DU DDU-DU"
    ],
    links: {
      spotify: "https://open.spotify.com/album/37OWAhKTXeHFcPPTkADa5v?si=tMg1mhGQQhe-HtroyuhdBQ",
      youtube: "https://www.youtube.com/watch?v=IHNzOHi8sJs&list=OLAK5uy_kjOSEXMGYI5Eg9HA3uFB39Lcp-r4BnxLg&pp=0gcJCbYEOCosWNin"
    }
  },
  'the-girls': {
    title: "THE GIRLS",
    releaseDate: "October 23, 2024",
    label: "YG Entertainment / Interscope Records",
    genre: "K-pop, Pop",
    language: "Korean, English",
    totalTracks: 2,
    coverImage: "BLACKPINK_PHOTOS/Album_The_Girls.png",
    description: "THE GIRLS is BLACKPINK's comeback single album. This release marks their return as a group after focusing on individual solo activities. The album celebrates their journey and bond as a group.",
    tracklist: [
      "The Girls",
      "The Girls (Instrumental)"
    ],
    links: {
      spotify: "https://open.spotify.com/album/4OIA4iFFUPeDVODUJ98tmm?si=CU8JuK3lSDK12xiYIgjreQ",
      youtube: "https://www.youtube.com/watch?v=cSqOY5nktfg&list=OLAK5uy_l9wY-NxXYLGiFXZK8bAur-gd3JwgyEgWY&pp=0gcJCbYEOCosWNin"
    }
  },

  'blackpink-in-your-area': {
    title: "BLACKPINK IN YOUR AREA",
    releaseDate: "December 5, 2018",
    label: "YGEX",
    genre: "K-pop, J-pop, Pop, EDM",
    language: "Japanese, Korean",
    totalTracks: 9,
    coverImage: "BLACKPINK_PHOTOS/Album_BlackPinkInYourArea.jpg",
    description: "BLACKPINK IN YOUR AREA is a Japanese compilation album that brings together all of BLACKPINK's major Japanese releases up to 2018. This comprehensive collection showcases their journey in the Japanese music market.",
    tracklist: [
      "DDU-DU DDU-DU (Japanese ver.)",
      "Forever Young (Japanese ver.)",
      "As If It's Your Last (Japanese ver.)",
      "Boombayah (Japanese ver.)",
      "Whistle (Japanese ver.)",
      "Playing with Fire (Japanese ver.)",
      "Stay (Japanese ver.)",
      "Really (Japanese ver.)",
      "See U Later (Japanese ver.)"
    ],
    links: {
      spotify: "https://open.spotify.com/album/4cpZazoKuj3jD6x2GrSX2w?si=AEzHUqxFRiOHNuxYCTTBkA",
      youtube: "https://www.youtube.com/watch?v=At-lqpWSdLI&list=OLAK5uy_lCA9bN3L-dnwrOcDKWMffau946jBXLozY"
    }
  },

  'arena-tour-2018': {
    title: "BLACKPINK ARENA TOUR 2018",
    releaseDate: "May 22, 2019",
    label: "YGEX",
    genre: "K-pop, J-pop, Live",
    language: "Japanese, Korean",
    totalTracks: 18,
    coverImage: "BLACKPINK_PHOTOS/Album_ArenaTour.jpg",
    description: "This live album captures BLACKPINK's electrifying performances during their 2018 Japan Arena Tour. It features live versions of their biggest hits and showcases the group's incredible stage presence and vocal abilities.",
    tracklist: [
      "DDU-DU DDU-DU (Live)",
      "Forever Young (Live)",
      "Stay (Live)",
      "Playing with Fire (Live)",
      "Kick It (Live)",
      "Boombayah (Live)",
      "As If It's Your Last (Live)",
      "Whistle (Live)",
      "Really (Live)",
      "See U Later (Live)",
      "Solo (Jennie)",
      "Don't Know What To Do (Live)",
      "Kill This Love (Live)",
      "Hope Not (Live)",
      "You & Me (Live)",
      "Only Look at Me (Live)",
      "Forever Young (Acoustic)",
      "As If It's Your Last (Remix)"
    ],
    links: {
      spotify: "https://open.spotify.com/album/1dH4B2bWb5Ys7aszi9KWHA?si=S52R3KzlTzuvj5ZNxvFZ9A",
      youtube: "https://www.youtube.com/watch?v=a1aV8IUgP8Q&list=OLAK5uy_k4ihG7GsxoC9hjWvvKjBdh8dutjYCPGI0"
    }
  },
  'kyocera-dome': {
    title: "2019-2020 IN YOUR AREA TOKYO DOME",
    releaseDate: "March 4, 2020",
    label: "YGEX",
    genre: "K-pop, J-pop, Live",
    language: "Japanese, Korean, English",
    totalTracks: 20,
    coverImage: "BLACKPINK_PHOTOS/Album_Osaka.jpg",
    description: "This live album documents BLACKPINK's historic performance at the Tokyo Dome as part of their In Your Area World Tour. It was a landmark achievement, making them one of the fastest K-pop acts to perform at the prestigious venue.",
    tracklist: [
      "DDU-DU DDU-DU (Live)",
      "Forever Young (Live)",
      "Stay (Live)",
      "Whistle (Live)",
      "Playing with Fire (Live)",
      "Kill This Love (Live)",
      "Don't Know What To Do (Live)",
      "Kick It (Live)",
      "Boombayah (Live)",
      "As If It's Your Last (Live)",
      "Really (Live)",
      "See U Later (Live)",
      "Solo - Jennie (Live)",
      "Kiss and Make Up (Live)",
      "Hope Not (Live)",
      "Sure Thing (Cover)",
      "DDU-DU DDU-DU (Remix)",
      "Forever Young (Japanese ver.)",
      "As If It's Your Last (Japanese ver.)",
      "Boombayah (Remix)"
    ],
    links: {
      spotify: null,
      youtube: "https://www.youtube.com/watch?v=a1aV8IUgP8Q&list=OLAK5uy_k4ihG7GsxoC9hjWvvKjBdh8dutjYCPGI0"
    }
  },
  'live-cd': {
    title: "BLACKPINK 2019-2020 WORLD TOUR LIVE CD",
    releaseDate: "December 30, 2020",
    label: "YG Entertainment / YGEX",
    genre: "K-pop, Pop, Live",
    language: "Korean, English, Japanese",
    totalTracks: 22,
    coverImage: "BLACKPINK_PHOTOS/Album_WorldTour1819.jpg",
    description: "This comprehensive live album captures the energy and excitement of BLACKPINK's 2019-2020 World Tour 'In Your Area'. It includes performances from multiple tour stops and showcases the group's global appeal.",
    tracklist: [
      "DDU-DU DDU-DU (Live)",
      "Forever Young (Live)",
      "Whistle (Live)",
      "How You Like That (Live)",
      "Ice Cream (Live)",
      "Pretty Savage (Live)",
      "Lovesick Girls (Live)",
      "Kill This Love (Live)",
      "Playing with Fire (Live)",
      "Stay (Live)",
      "Boombayah (Live)",
      "As If It's Your Last (Live)",
      "Don't Know What To Do (Live)",
      "Kick It (Live)",
      "Really (Live)",
      "See U Later (Live)",
      "Solo - Jennie (Live)",
      "Gone - Rosé (Live)",
      "On The Ground - Rosé (Live)",
      "LALISA - Lisa (Live)",
      "Money - Lisa (Live)",
      "Hope Not (Live)"
    ],
    links: {
      spotify: "https://open.spotify.com/album/7J4ASJD3IvdANlrPkmeVP0?si=Zb_VCPa1Q_ql1auaVDxSew",
      youtube: "https://music.youtube.com/playlist?list=your-playlist-id"
    }
  }
};

function goToAlbumPage(albumId) {
  localStorage.setItem('selectedAlbum', albumId);
  window.location.href = 'AlbumDetail.html';
}

function loadAlbumData() {
  const selectedAlbum = localStorage.getItem('selectedAlbum');
  
  if (selectedAlbum && albumData[selectedAlbum]) {
    const album = albumData[selectedAlbum];
    
    document.getElementById('albumTitle').textContent = album.title;
    //document.getElementById('albumTitleCover').textContent = album.title;
    document.getElementById('albumReleaseDate').innerHTML = `<strong>Release Date:</strong> ${album.releaseDate}`;
    document.getElementById('albumLabel').innerHTML = `<strong>Label:</strong> ${album.label}`;
    document.getElementById('albumGenre').innerHTML = `<strong>Genre:</strong> ${album.genre}`;
    document.getElementById('albumLanguage').innerHTML = `<strong>Language:</strong> ${album.language}`;
    document.getElementById('albumTracks').innerHTML = `<strong>Total Tracks:</strong> ${album.totalTracks}`;
    document.getElementById('albumDescription').textContent = album.description;
    
    const coverElement = document.getElementById('albumCoverDetail');
    coverElement.style.backgroundImage = `url('${album.coverImage}')`;
    
    const tracklistElement = document.getElementById('albumTracklist');
    tracklistElement.innerHTML = '';
    album.tracklist.forEach(track => {
      const li = document.createElement('li');
      li.textContent = track;
      tracklistElement.appendChild(li);
    });

    const spotifyLink = document.getElementById('spotifyLink');
    if (album.links.spotify && album.links.spotify !== '#' && album.links.spotify !== 'your-album-id') {
      spotifyLink.href = album.links.spotify;
      spotifyLink.style.display = 'inline-flex';
    } else {
      spotifyLink.style.display = 'none';
    }

    const youtubeLink = document.getElementById('youtubeLink');
    if (album.links.youtube && album.links.youtube !== '#' && album.links.youtube !== 'your-playlist-id') {
      youtubeLink.href = album.links.youtube;
      youtubeLink.style.display = 'inline-flex';
    } else {
      youtubeLink.style.display = 'none';
    }
    
    document.title = `BLACKPINK | ${album.title}`;
  }
}