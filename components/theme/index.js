export const lightTheme = {
  fonts: {
    primary: '"Plus Jakarta Sans", sans-serif'
  },
  main: {
    color: '#333333',
    background: '#ffffff',
    selection: 'rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
  },
  button: {
    default: {
      color: '#27272A',
      background: '#fafafa',
      borderColor: '#1F2937'
    },
    hover: {
      color: '#ffffff',
      background: 'linear-gradient(60deg,  #E964FF, #5364FF)',
      borderColor: 'rebeccapurple'
    },
    focus: {
      borderColor: '#eeeeee'
    }
  },

  buttonHero: {
    default: {
      color: '#FFFFFF',
      borderColor: '#1F2937'
    },
    hover: {
      color: '#6E6BFF',
      borderColor: 'rebeccapurple'
    },
    focus: {
      borderColor: '#eeeeee'
    }
  },
  
  buttonVisit: {
    default: {
      color: '#FFFFFF',
      background: '#1F2937',
      borderColor: '#1F2937'
    },
    hover: {
      color: '#1F2937',
      background: '#fafafa',
      borderColor: '#1F2937'
    },
    focus: {
      borderColor: '#eeeeee'
    }
  },
  animatelink: {
    default: {
      color: '#9CA3AF',
      background: '#fafafa',
      borderColor: '#cccccc'
    },
    hover: {
      color: '#ffffff',
      background: 'rebeccapurple',
      borderColor: 'rebeccapurple'
    },
    focus: {
      borderColor: '#eeeeee'
    }
  },
  viewlink: {
    default: {
      color: '#fff',
      background: '#fafafa',
      borderColor: '#cccccc'
    },
    hover: {
      color: '#fafafa',
      background: 'rebeccapurple',
      borderColor: 'rebeccapurple'
    },
    focus: {
      borderColor: '#eeeeee'
    }
  },

  badge: {
    color: '#555555',
    background: '#ffffff',
    borderColor: '#ffffff'
  },
  input: {
    default: {
      color: '#333333',
      background: '#fafafa',
      borderColor: '#eeeeee'
    },
    hover: {
      background: '#fafafa',
      borderColor: '#cccccc'
    },
    focus: {
      background: '#ffffff',
      borderColor: '#222222'
    }
  },
  checkbox: {
    default: {
      color: '#333333',
      tickColor: '#ffffff',
      checkBorderColor: '#eeeeee',
      checkBackground: '#ffffff'
    },
    hover: {
      color: '#999999',
      background: '#eeeeee',
      checkBorderColor: '#cccccc'
    },
    checked: {
      background: '#eeeeee',
      checkBorderColor: '#333333',
      checkBackground: '#333333'
    }
  }
};

export const darkTheme = {
  ...lightTheme,
  main: {
    color: '#999999',
    background: '#161616',
    selection: 'rgba(0, 0, 0, 0.1)'
  },
  button: {
    default: {
      color: '#999999',
      background: '#1b1b1b'
    },
    hover: {
      background: '#232323'
    },
    focus: {
      borderColor: '#1b1b1b'
    }
  },
  badge: {
    color: '#dddddd',
    background: '#222222',
    borderColor: '#222222'
  },
  input: {
    default: {
      color: '#dddddd',
      background: '#1b1b1b',
      borderColor: '#333333'
    },
    hover: {
      background: '#1b1b1b',
      borderColor: '#555555'
    },
    focus: {
      background: '#161616',
      borderColor: '#dddddd'
    }
  },
  checkbox: {
    default: {
      color: '#dddddd',
      tickColor: '#ffffff',
      checkBorderColor: '#333333',
      checkBackground: '#1b1b1b'
    },
    hover: {
      color: '#eeeeee',
      background: '#222222',
      checkBorderColor: '#444444'
    },
    checked: {
      color: '#ffffff',
      background: '#222222',
      tickColor: '#333333',
      checkBorderColor: '#eeeeee',
      checkBackground: '#eeeeee'
    }
  }
};