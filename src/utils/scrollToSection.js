const scrollToSection = selector => {
  if (selector.includes('.') || selector.includes('#')) {
    document.querySelector(`${selector}`).scrollIntoView({ behavior: 'smooth' })
  } else {
    throw new Error('Invalid selector')
  }
}

export default scrollToSection
