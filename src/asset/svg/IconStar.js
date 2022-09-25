
const IconStar = () => {
  return (
    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="myClip">
        <circle cx="40" cy="35" r="35" />
        {/* <rect class="top" x="20" y="29" width="60" height="7.85106" fill="#000" /> */}
      </clipPath>
      <path id="start" d="M39.5 0L35.3104 35.3104L0 39.5L35.3104 43.6896L39.5 79L43.6896 43.6896L79 39.5L43.6896 35.3104L39.5 0Z" fill="url(#paint0_linear_2_97)" />
      <defs>
        <linearGradient id="paint0_linear_2_97" x1="39.5" y1="0" x2="39.5" y2="79" gradientUnits="userSpaceOnUse">
          <stop id='lineHeightLight' offset="0.255208" stop-color="#94CCDF" />
          <stop offset="1" stop-color="#2B6377" />
        </linearGradient>
      </defs>
      <use clip-path="url(#myClip)" href="#start" fill="red" />
    </svg>

  )
}

export default IconStar