import styled from 'styled-components'

const Animator = styled.div`
  cursor: pointer;
  
  transition: ease-in-out 1s all;
  @keyframes anim {
    0% {
      transform: scale(1.0);
    }

    50% {
      transform: scale(1.125) rotate(180deg);
    }

    100% {
      transform: scale(1.25) rotate(360deg);
    }
  }

  &:hover {
    animation: anim 1s ease-in-out;
  }
`

export const Logo = ({ width = 512, height = 512 }) => (
  <>
    <style jsx>
      {`
      svg {
        height: 512px;
        width: 512px;
        filter: drop-shadow(0px 0px 16px #009DFF) drop-shadow(0px 0px 4px #009DFF);
      }

      svg path {
        fill: #E1F3FF;
      }

      @media screen and (max-width: 800px) {
        svg {
          height: 480px;
          width: 480px;
        }
      }

      @media screen and (max-width: 600px) {
        svg {
          height: 360px;
          width: 360px;
        }
      }

      @media screen and (max-width: 480px) {
        svg {
          height: 240px;
          width: 240px;
        }
      }
      `}
    </style>
    <Animator>
      <svg width={width} height={height} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62 305.38C60.8954 305.38 60 304.485 60 303.38V241.657C60 240.552 60.8954 239.657 62 239.657H73.6484C74.753 239.657 75.6484 240.552 75.6484 241.657V289.389C75.6484 290.493 76.5439 291.389 77.6484 291.389H95.6253C96.8075 291.389 97.7317 292.409 97.6156 293.585L96.6296 303.577C96.5286 304.6 95.6678 305.38 94.6393 305.38H62Z" fill="black" />
        <path d="M133.998 290.008C135.164 290.008 136.091 291.004 135.913 292.156C135.22 296.633 133.492 300.121 130.729 302.619C127.599 305.442 123.211 306.853 117.565 306.853C110.815 306.853 105.814 304.828 102.561 300.778C99.3704 296.666 97.7748 290.315 97.7748 281.724C97.7748 273.132 99.4624 266.627 102.838 262.209C106.213 257.791 111.214 255.581 117.842 255.581C123.917 255.581 128.489 257.607 131.557 261.657C134.687 265.707 136.252 271.69 136.252 279.606V282.577C136.252 283.682 135.356 284.577 134.252 284.577H113.979C112.864 284.577 111.958 285.491 112.013 286.605C112.174 289.872 112.614 292.326 113.331 293.966C114.252 295.868 115.663 296.82 117.565 296.82C119.1 296.82 120.235 296.298 120.971 295.255C121.514 294.486 121.923 293.335 122.199 291.801C122.381 290.79 123.227 290.008 124.254 290.008H133.998ZM120.689 276.477C121.806 276.477 122.712 275.561 122.652 274.446C122.493 271.514 122.087 269.368 121.432 268.008C120.695 266.29 119.437 265.431 117.658 265.431C115.817 265.431 114.466 266.259 113.607 267.916C112.955 269.272 112.507 271.429 112.265 274.387C112.172 275.524 113.087 276.477 114.228 276.477H120.689Z" fill="black" />
        <path d="M165.158 302.795C165.304 303.757 164.738 304.691 163.802 304.957C160.875 305.792 158.036 306.209 155.285 306.209C150.498 306.209 146.97 304.981 144.699 302.527C142.429 300.072 141.293 296.298 141.293 291.205V269.916C141.293 268.812 140.398 267.916 139.293 267.916H137.126C136.022 267.916 135.126 267.021 135.126 265.916V259.054C135.126 257.95 136.022 257.054 137.126 257.054H139.293C140.398 257.054 141.293 256.159 141.293 255.054V246.351C141.293 245.247 142.189 244.351 143.293 244.351H154.021C155.126 244.351 156.021 245.247 156.021 246.351V255.054C156.021 256.159 156.917 257.054 158.021 257.054H162.766C163.871 257.054 164.766 257.95 164.766 259.054V265.916C164.766 267.021 163.871 267.916 162.766 267.916H158.021C156.917 267.916 156.021 268.812 156.021 269.916V290.376C156.021 293.383 157.279 294.887 159.795 294.887C160.359 294.887 160.922 294.844 161.485 294.758C162.734 294.569 164.022 295.316 164.212 296.564L165.158 302.795Z" fill="black" />
        <path d="M168.815 266.535C167.64 266.535 166.718 265.528 166.823 264.358L168.86 241.479C168.952 240.448 169.816 239.657 170.852 239.657H180.593C181.849 239.657 182.794 240.8 182.558 242.034L178.17 264.912C177.989 265.854 177.165 266.535 176.206 266.535H168.815Z" fill="black" />
        <path d="M196.697 285.498C191.788 284.27 188.259 282.491 186.112 280.159C183.964 277.827 182.89 274.605 182.89 270.493C182.89 265.891 184.455 262.27 187.584 259.632C190.775 256.932 195.102 255.581 200.563 255.581C205.595 255.581 209.431 256.747 212.069 259.079C214.386 261.027 216.002 264.014 216.919 268.04C217.174 269.163 216.35 270.218 215.204 270.329L206.791 271.139C205.727 271.241 204.79 270.483 204.531 269.446C204.229 268.236 203.827 267.296 203.325 266.627C202.588 265.646 201.514 265.155 200.103 265.155C198.876 265.155 197.894 265.553 197.157 266.351C196.482 267.149 196.145 268.254 196.145 269.665C196.145 271.076 196.452 272.15 197.065 272.887C197.679 273.623 198.753 274.206 200.287 274.636L204.337 275.74C209.431 277.152 213.021 279.054 215.107 281.447C217.194 283.779 218.237 287.093 218.237 291.389C218.237 296.175 216.641 299.949 213.45 302.711C210.321 305.472 205.994 306.853 200.471 306.853C194.641 306.853 190.254 305.534 187.308 302.895C184.803 300.603 183.223 297.176 182.57 292.614C182.405 291.461 183.331 290.468 184.495 290.468H193.391C194.389 290.468 195.217 291.209 195.446 292.181C195.766 293.539 196.214 294.595 196.789 295.347C197.648 296.329 198.876 296.82 200.471 296.82C201.821 296.82 202.865 296.39 203.601 295.531C204.337 294.672 204.706 293.475 204.706 291.941C204.706 290.407 204.368 289.21 203.693 288.351C203.079 287.492 202.067 286.878 200.655 286.51L196.697 285.498Z" fill="black" />
        <path d="M277.45 280.251C278.594 280.251 279.509 281.21 279.406 282.35C278.726 289.87 276.474 295.768 272.65 300.041C268.538 304.705 262.892 307.037 255.713 307.037C247.489 307.037 241.261 304.153 237.026 298.385C232.792 292.555 230.675 284.055 230.675 272.887C230.675 261.595 232.854 252.973 237.211 247.021C241.629 241.007 247.95 238 256.173 238C262.8 238 268.047 240.117 271.913 244.351C275.462 248.182 277.77 253.719 278.837 260.963C278.998 262.055 278.205 263.046 277.108 263.17L265.623 264.469C264.523 264.593 263.536 263.799 263.374 262.704C262.863 259.247 262.089 256.689 261.051 255.029C259.824 253.065 258.075 252.084 255.805 252.084C252.736 252.084 250.466 253.71 248.993 256.962C247.581 260.215 246.876 265.339 246.876 272.334C246.876 279.453 247.612 284.669 249.085 287.983C250.558 291.297 252.89 292.954 256.081 292.954C258.597 292.954 260.499 291.941 261.788 289.916C262.938 288.138 263.71 285.535 264.103 282.108C264.223 281.064 265.087 280.251 266.137 280.251H277.45Z" fill="black" />
        <path d="M283.66 305.38C282.556 305.38 281.66 304.485 281.66 303.38V259.054C281.66 257.95 282.556 257.054 283.66 257.054H293.836C294.941 257.054 295.836 257.95 295.836 259.054V259.621C295.836 260.641 297.294 261.07 297.96 260.298C300.301 257.583 303.029 256.226 306.146 256.226C306.695 256.226 307.245 256.264 307.795 256.34C308.766 256.474 309.38 257.402 309.273 258.377L308.232 267.806C308.101 268.993 306.965 269.788 305.778 269.662C305.213 269.603 304.661 269.573 304.12 269.573C301.85 269.573 299.978 270.371 298.505 271.966C297.094 273.562 296.388 275.618 296.388 278.134V303.38C296.388 304.485 295.493 305.38 294.388 305.38H283.66Z" fill="black" />
        <path d="M343.112 290.008C344.278 290.008 345.205 291.004 345.027 292.156C344.335 296.633 342.607 300.121 339.843 302.619C336.713 305.442 332.326 306.853 326.68 306.853C319.93 306.853 314.928 304.828 311.676 300.778C308.485 296.666 306.889 290.315 306.889 281.724C306.889 273.132 308.577 266.627 311.952 262.209C315.327 257.791 320.328 255.581 326.956 255.581C333.031 255.581 337.603 257.607 340.671 261.657C343.801 265.707 345.366 271.69 345.366 279.606V282.577C345.366 283.682 344.47 284.577 343.366 284.577H323.094C321.978 284.577 321.073 285.491 321.128 286.605C321.289 289.872 321.728 292.326 322.446 293.966C323.366 295.868 324.777 296.82 326.68 296.82C328.214 296.82 329.349 296.298 330.086 295.255C330.628 294.486 331.037 293.335 331.313 291.801C331.495 290.79 332.341 290.008 333.368 290.008H343.112ZM329.804 276.477C330.92 276.477 331.827 275.561 331.766 274.446C331.608 271.514 331.201 269.368 330.546 268.008C329.81 266.29 328.552 265.431 326.772 265.431C324.931 265.431 323.581 266.259 322.722 267.916C322.069 269.272 321.622 271.429 321.38 274.387C321.287 275.524 322.202 276.477 323.342 276.477H329.804Z" fill="black" />
        <path d="M370.65 305.38C369.994 305.38 369.462 304.848 369.462 304.192C369.462 303.029 367.834 302.467 366.964 303.238C366.146 303.962 365.261 304.584 364.307 305.104C362.344 306.147 360.226 306.669 357.956 306.669C353.967 306.669 350.868 305.411 348.659 302.895C346.45 300.318 345.345 296.758 345.345 292.217C345.345 287.308 346.91 283.442 350.04 280.619C353.231 277.796 357.894 276.17 364.031 275.74L366.971 275.514C368.013 275.434 368.818 274.565 368.818 273.52V272.15C368.818 269.818 368.48 268.131 367.805 267.088C367.191 265.983 366.179 265.431 364.768 265.431C363.356 265.431 362.282 265.922 361.546 266.904C361.047 267.527 360.661 268.432 360.387 269.618C360.147 270.661 359.231 271.447 358.163 271.372L349.124 270.735C347.974 270.654 347.121 269.617 347.36 268.489C348.216 264.443 349.907 261.368 352.433 259.263C355.44 256.809 359.674 255.581 365.136 255.581C371.088 255.581 375.476 257.054 378.299 260C381.122 262.945 382.533 267.517 382.533 273.715V303.38C382.533 304.485 381.638 305.38 380.533 305.38H370.65ZM368.818 286.393C368.818 285.219 367.811 284.298 366.642 284.401L365.688 284.485C363.479 284.669 361.761 285.344 360.533 286.51C359.306 287.676 358.692 289.21 358.692 291.113C358.692 292.831 359.06 294.12 359.797 294.979C360.533 295.838 361.576 296.267 362.927 296.267C364.706 296.267 366.118 295.5 367.161 293.966C368.265 292.432 368.818 290.346 368.818 287.707V286.393Z" fill="black" />
        <path d="M413.199 302.795C413.345 303.757 412.779 304.691 411.843 304.957C408.916 305.792 406.077 306.209 403.326 306.209C398.54 306.209 395.011 304.981 392.741 302.527C390.47 300.072 389.335 296.298 389.335 291.205V269.916C389.335 268.812 388.439 267.916 387.335 267.916H385.167C384.063 267.916 383.167 267.021 383.167 265.916V259.054C383.167 257.95 384.063 257.054 385.167 257.054H387.335C388.439 257.054 389.335 256.159 389.335 255.054V246.351C389.335 245.247 390.23 244.351 391.335 244.351H402.063C403.167 244.351 404.063 245.247 404.063 246.351V255.054C404.063 256.159 404.958 257.054 406.063 257.054H410.807C411.912 257.054 412.807 257.95 412.807 259.054V265.916C412.807 267.021 411.912 267.916 410.807 267.916H406.063C404.958 267.916 404.063 268.812 404.063 269.916V290.376C404.063 293.383 405.321 294.887 407.837 294.887C408.4 294.887 408.963 294.844 409.526 294.758C410.775 294.569 412.064 295.316 412.253 296.564L413.199 302.795Z" fill="black" />
        <path d="M448.746 290.008C449.912 290.008 450.839 291.004 450.661 292.156C449.969 296.633 448.241 300.121 445.477 302.619C442.347 305.442 437.96 306.853 432.314 306.853C425.564 306.853 420.562 304.828 417.31 300.778C414.119 296.666 412.523 290.315 412.523 281.724C412.523 273.132 414.211 266.627 417.586 262.209C420.961 257.791 425.962 255.581 432.59 255.581C438.665 255.581 443.237 257.607 446.305 261.657C449.435 265.707 451 271.69 451 279.606V282.577C451 283.682 450.105 284.577 449 284.577H428.728C427.612 284.577 426.707 285.491 426.762 286.605C426.923 289.872 427.362 292.326 428.08 293.966C429 295.868 430.412 296.82 432.314 296.82C433.848 296.82 434.983 296.298 435.72 295.255C436.262 294.486 436.671 293.335 436.947 291.801C437.129 290.79 437.975 290.008 439.003 290.008H448.746ZM435.438 276.477C436.554 276.477 437.461 275.561 437.4 274.446C437.242 271.514 436.835 269.368 436.18 268.008C435.444 266.29 434.186 265.431 432.406 265.431C430.565 265.431 429.215 266.259 428.356 267.916C427.703 269.272 427.256 271.429 427.014 274.387C426.921 275.524 427.836 276.477 428.976 276.477H435.438Z" fill="black" />
        <path d="M202.993 330.222C202.993 324.216 207.135 318.452 214.419 318.452C219.493 318.452 223.428 321.42 225.05 325.631C225.166 325.913 224.962 326.224 224.657 326.229L219.755 326.316C219.569 326.32 219.394 326.231 219.286 326.08C218.216 324.492 216.455 323.491 214.419 323.491C210.518 323.491 208.447 326.84 208.447 330.222C208.447 333.64 210.552 336.919 214.419 336.919C216.609 336.919 218.332 335.805 219.372 334.169C219.746 333.58 219.268 332.88 218.57 332.88H215.901C214.796 332.88 213.901 331.985 213.901 330.88V330.013C213.901 328.909 214.796 328.013 215.901 328.013H225.217C225.46 328.013 225.666 328.188 225.706 328.427C225.81 329.014 225.844 329.636 225.844 330.222C225.844 336.263 221.737 342.028 214.419 342.028C207.135 342.028 202.993 336.229 202.993 330.222Z" fill="black" />
        <path d="M229.818 320.9C229.818 319.796 230.714 318.9 231.818 318.9H233.065C234.17 318.9 235.065 319.796 235.065 320.9V339.579C235.065 340.684 234.17 341.579 233.065 341.579H231.818C230.714 341.579 229.818 340.684 229.818 339.579V320.9Z" fill="black" />
        <path d="M240.068 320.9C240.068 319.796 240.963 318.9 242.068 318.9H259.262C260.366 318.9 261.262 319.796 261.262 320.9V321.733C261.262 322.837 260.366 323.733 259.262 323.733H247.314C246.21 323.733 245.314 324.628 245.314 325.733V325.806C245.314 326.911 246.21 327.806 247.314 327.806H255.051C256.155 327.806 257.051 328.701 257.051 329.806V330.639C257.051 331.743 256.155 332.639 255.051 332.639H247.314C246.21 332.639 245.314 333.534 245.314 334.639V339.579C245.314 340.684 244.419 341.579 243.314 341.579H242.068C240.963 341.579 240.068 340.684 240.068 339.579V320.9Z" fill="black" />
        <path d="M272.085 325.733C272.085 324.628 271.19 323.733 270.085 323.733H265.697C264.593 323.733 263.697 322.837 263.697 321.733V320.9C263.697 319.796 264.593 318.9 265.697 318.9H283.72C284.825 318.9 285.72 319.796 285.72 320.9V321.733C285.72 322.837 284.825 323.733 283.72 323.733H279.332C278.228 323.733 277.332 324.628 277.332 325.733V339.579C277.332 340.684 276.437 341.579 275.332 341.579H274.085C272.981 341.579 272.085 340.684 272.085 339.579V325.733Z" fill="black" />
        <path d="M287.845 334.572C287.845 334.324 288.046 334.123 288.294 334.123H292.609C292.857 334.123 293.058 334.324 293.058 334.572C293.058 335.538 293.782 336.194 294.922 336.608C296.026 337.023 297.441 337.161 298.408 337.161C299.547 337.161 300.928 337.057 302.032 336.643C303.102 336.229 303.793 335.573 303.793 334.468C303.793 333.536 303.068 333.018 301.86 332.742C301.238 332.57 300.583 332.501 299.961 332.466C299.305 332.432 298.719 332.432 298.235 332.432C293.299 332.432 288.26 331.534 288.26 325.735C288.26 320.074 293.299 318.452 298.408 318.452C303.241 318.452 308.591 320.592 308.591 325.873C308.591 326.14 308.375 326.356 308.108 326.356H303.862C303.595 326.356 303.379 326.14 303.379 325.873C303.379 324.941 302.723 324.285 301.722 323.871C300.686 323.457 299.409 323.284 298.408 323.284C297.372 323.284 296.095 323.388 295.094 323.767C294.128 324.113 293.506 324.734 293.506 325.735C293.506 326.598 294.162 327.081 295.301 327.323C295.854 327.461 296.475 327.53 297.062 327.564C297.649 327.599 298.235 327.599 298.65 327.599C303.724 327.599 309.04 328.496 309.04 334.468C309.04 340.336 303.724 342.028 298.408 342.028C293.644 342.028 287.845 339.991 287.845 334.572Z" fill="black" />
        <path fillRule="evenodd" clipRule="evenodd" d="M253.718 87.4762C255.808 86.5375 258.201 86.5405 260.29 87.4846L404.648 152.742C406.08 153.39 407 154.816 407 156.387V200.387C407 202.023 406.004 203.494 404.486 204.101L402 205.095V240.351H394V208.536L349 228.482V256.971C347.575 258.338 346.416 259.934 345.501 261.719C345.339 261.434 345.173 261.155 345 260.88V230.255L322 240.45V251.985C320.606 252.224 319.271 252.571 318 253.028V242.224L293.566 253.054H283.66C282.825 253.054 282.03 253.225 281.307 253.533C280.968 252.396 280.588 251.299 280.164 250.244L318 233.473V204.767C318 201.872 315.019 199.936 312.373 201.113L263.373 222.928C261.93 223.571 261 225.003 261 226.583V234.362C259.451 234.12 257.84 234 256.173 234C255.091 234 254.033 234.047 253 234.141V226.597C253 225.013 252.066 223.579 250.618 222.939L202.618 201.714C199.973 200.545 197 202.481 197 205.372V234.161L231.241 249.202C230.104 251.504 229.193 254.018 228.492 256.733L197 242.899V251.766C195.615 251.916 194.28 252.157 193 252.496V241.142L185.065 237.656C183.976 236.438 182.391 235.657 180.593 235.657H180.514L170 231.038V235.717C168.367 235.95 166.936 236.842 166 238.126V229.281L121 209.513V251.753C119.977 251.638 118.923 251.581 117.842 251.581C116.161 251.581 114.545 251.708 113 251.966V206.025L108.424 204.064C106.954 203.433 106 201.987 106 200.387V156.387C106 154.812 106.925 153.383 108.362 152.738L253.718 87.4762ZM322 231.7L345 221.505V192.747C345 189.851 342.019 187.915 339.373 189.093L326.746 194.714C323.86 195.999 322 198.863 322 202.023V231.7ZM353.746 182.694C350.86 183.979 349 186.842 349 190.002V219.732L396.446 198.701L396.486 198.685C398.004 198.077 399 196.607 399 194.971V165.626C399 164.178 397.509 163.21 396.187 163.799L353.746 182.694ZM306.68 194.891C308.268 194.184 308.261 191.929 306.669 191.232L258.902 170.309C257.872 169.858 256.699 169.861 255.672 170.318L207.803 191.605C206.218 192.31 206.22 194.56 207.807 195.262L253.748 215.576C255.815 216.49 258.172 216.487 260.237 215.567L306.68 194.891ZM314.144 190.139C315.175 190.59 316.348 190.587 317.376 190.129L334.654 182.437C336.218 181.741 336.241 179.53 334.693 178.8L286.301 156.004L256.388 143.056L203.519 121.501C201.493 120.675 199.218 120.715 197.222 121.611L177.264 130.572L258.081 165.582L314.144 190.139ZM168.851 178.036C169.908 178.504 171.115 178.491 172.162 178.002L218.419 156.395C219.981 155.665 219.95 153.433 218.368 152.747L175.561 134.194C173.498 133.3 171.154 133.315 169.103 134.236L123.923 154.521C122.343 155.23 122.35 157.474 123.933 158.174L168.851 178.036ZM197.124 190.538C198.157 190.994 199.335 190.993 200.367 190.534L248.136 169.291C249.728 168.584 249.716 166.32 248.118 165.628L227.348 156.639L179.356 179.057C177.8 179.783 177.823 182.003 179.393 182.698L197.124 190.538ZM253.706 96.2506L205.389 117.944L255.665 138.442C256.628 138.835 257.706 138.837 258.671 138.448L308.852 118.217L260.279 96.259C258.19 95.3149 255.797 95.3119 253.706 96.2506ZM287.111 151.996L335.574 130.297L317.011 121.905C315.021 121.006 312.75 120.959 310.724 121.775L266.788 139.489C265.141 140.153 265.111 142.474 266.741 143.179L287.111 151.996ZM343.725 133.981C341.639 133.038 339.249 133.034 337.16 133.969L295.89 152.448C294.329 153.147 294.308 155.354 295.855 156.083L341.81 177.732C342.863 178.228 344.079 178.241 345.142 177.767L389.155 158.172C390.732 157.47 390.739 155.234 389.166 154.523L343.725 133.981ZM161.235 183.416C164.132 184.697 166 187.565 166 190.732V220.543L118.592 199.718L116.424 198.789C114.954 198.158 114 196.712 114 195.112V165.601C114 164.155 115.487 163.187 116.809 163.771L161.235 183.416ZM170 193.434C170 190.542 172.973 188.606 175.618 189.775L188.235 195.355C191.132 196.635 193 199.504 193 202.671V232.404L170 222.3V193.434Z" fill="black" />
        <path d="M113 310.546V352.359C113 355.447 114.778 358.26 117.568 359.585L250.096 422.536C254.47 424.614 259.549 424.599 263.911 422.495L397.475 358.081C400.242 356.747 402 353.947 402 350.875V310.18C399.077 310.05 396.361 309.479 394 308.333V345.852C394 348.923 392.242 351.723 389.475 353.058L349 372.577V308.359C347.776 307.611 346.654 306.674 345.653 305.534L345.64 305.519L345.622 305.498C345.406 305.246 345.198 304.988 345 304.725V371.995C345 373.53 344.121 374.931 342.738 375.598L322 385.599V310.53C320.608 310.328 319.272 310.029 318 309.628V385.016C318 386.552 317.121 387.952 315.738 388.619L266.738 412.25C264.082 413.531 261 411.596 261 408.647V324.649C260.284 325.321 259.321 325.733 258.262 325.733H253V325.806H254.051C256.26 325.806 258.051 327.597 258.051 329.806V330.639C258.051 332.848 256.26 334.639 254.051 334.639H253V408.731C253 411.669 249.938 413.604 247.284 412.344L199.284 389.544C197.889 388.881 197 387.475 197 385.931V310.699C195.612 310.57 194.276 310.358 193 310.055V386.559L172.284 376.719C170.889 376.056 170 374.65 170 373.106V270.535H168.815C168.155 270.535 167.523 270.43 166.932 270.235C166.647 270.509 166.335 270.756 166 270.971V292.174C167.088 293.039 167.914 294.299 168.167 295.964L169.112 302.195C169.487 304.664 168.277 307.191 166 308.368V373.734L125.568 354.528C122.778 353.203 121 350.391 121 347.302V310.684C119.886 310.798 118.74 310.853 117.565 310.853C115.987 310.853 114.463 310.753 113 310.546Z" fill="black" />
        <path d="M253 332.639H254.051C255.155 332.639 256.051 331.743 256.051 330.639V329.806C256.051 328.702 255.155 327.806 254.051 327.806H253V332.639Z" fill="black" />
        <path d="M253 323.733V318.9H258.262C259.366 318.9 260.262 319.796 260.262 320.9V321.733C260.262 322.837 259.366 323.733 258.262 323.733H253Z" fill="black" />
        <path d="M253 316.9V310.938C253.886 311.004 254.791 311.037 255.713 311.037C257.544 311.037 259.308 310.901 261 310.625V317.984C260.284 317.312 259.321 316.9 258.262 316.9H253Z" fill="black" />
        <path d="M117.565 306.853C118.767 306.853 119.912 306.789 121 306.661V295.214L120.989 295.23L120.971 295.255C120.235 296.298 119.1 296.82 117.565 296.82C115.663 296.82 114.252 295.868 113.331 293.966C113.213 293.697 113.103 293.405 113 293.092V306.502C114.421 306.736 115.943 306.853 117.565 306.853Z" fill="black" />
        <path d="M121 255.781C119.997 255.648 118.944 255.581 117.842 255.581C116.118 255.581 114.504 255.731 113 256.03V269.625C113.178 268.958 113.38 268.388 113.607 267.916C114.466 266.259 115.817 265.431 117.658 265.431C119.128 265.431 120.242 266.017 121 267.19V255.781Z" fill="black" />
        <path d="M121 284.577V276.453C120.899 276.469 120.795 276.477 120.689 276.477H114.228C113.763 276.477 113.337 276.319 113 276.055V284.833C113.289 284.67 113.623 284.577 113.979 284.577H121Z" fill="black" />
        <path d="M170 239.847V266.535H168.815C168.801 266.535 168.787 266.535 168.774 266.535L168.758 266.535L168.735 266.534C168.195 266.513 167.714 266.279 167.368 265.916C166.986 265.516 166.769 264.958 166.823 264.358L168.86 241.479C168.925 240.75 169.375 240.141 170 239.847Z" fill="black" />
        <path d="M197 306.68C195.557 306.527 194.223 306.274 193 305.92V290.468H193.391C194.389 290.468 195.217 291.209 195.446 292.181C195.766 293.539 196.214 294.595 196.789 295.347C196.857 295.425 196.927 295.499 197 295.571V306.68Z" fill="black" />
        <path d="M193 284.374C194.13 284.79 195.363 285.164 196.697 285.498L197 285.575V272.806C196.43 272.072 196.145 271.025 196.145 269.665C196.145 268.368 196.43 267.33 197 266.551V255.793C195.572 255.971 194.239 256.261 193 256.665V284.374Z" fill="black" />
        <path d="M255.713 307.037C254.783 307.037 253.879 307 253 306.927V292.324C253.918 292.744 254.945 292.954 256.081 292.954C258.126 292.954 259.766 292.284 261 290.946V306.565C259.341 306.88 257.579 307.037 255.713 307.037Z" fill="black" />
        <path d="M247.203 264.952C247.54 261.6 248.136 258.936 248.993 256.962C249.043 256.852 249.094 256.743 249.146 256.637C248.568 256.658 247.972 256.552 247.391 256.297L234.907 250.813C233.783 253.056 232.883 255.573 232.207 258.365L247.203 264.952Z" fill="black" />
        <path d="M253 252.627V238.159C254.024 238.053 255.082 238 256.173 238C257.873 238 259.482 238.139 261 238.418V252.59C261 255.483 263.976 257.42 266.621 256.247L276.505 251.866C277.118 253.412 277.637 255.085 278.064 256.888C278.23 257.59 278.382 258.312 278.52 259.054C278.535 259.135 278.549 259.215 278.564 259.296L278.584 259.407L278.599 259.489L278.617 259.592L278.631 259.674L268.565 264.136L265.623 264.469C264.523 264.593 263.536 263.799 263.374 262.704C262.863 259.247 262.089 256.689 261.051 255.029C259.824 253.065 258.075 252.084 255.805 252.084C254.781 252.084 253.846 252.265 253 252.627Z" fill="black" />
        <path d="M284.542 257.054L281.825 258.259C281.937 257.999 282.103 257.769 282.309 257.58C282.665 257.254 283.139 257.054 283.66 257.054H284.542Z" fill="black" />
        <path d="M261.88 267.344L261.91 267.365L261.931 267.381L261.971 267.408L262.009 267.435C261.957 267.495 261.906 267.556 261.857 267.618C261.849 267.515 261.841 267.412 261.833 267.309L261.88 267.344Z" fill="black" />
        <path d="M318 305.388C319.229 305.874 320.562 306.239 322 306.483V292.724C321.543 291.17 321.252 289.131 321.128 286.605C321.093 285.895 321.448 285.265 322 284.903V275.958C321.578 275.572 321.329 275.007 321.38 274.387C321.519 272.688 321.725 271.253 322 270.082V256.053C320.566 256.346 319.233 256.777 318 257.344V305.388Z" fill="black" />
        <path d="M345 283.73V273.428C345.244 275.337 345.366 277.396 345.366 279.606V282.577C345.366 283.007 345.23 283.405 345 283.73Z" fill="black" />
        <path d="M345 291.454V292.327L345.017 292.217L345.027 292.156C345.065 291.912 345.053 291.676 345 291.454Z" fill="black" />
        <path d="M347.728 266.987C348.068 265.781 348.492 264.672 349 263.662V270.722C348.865 270.705 348.734 270.673 348.61 270.63C347.734 270.328 347.158 269.441 347.36 268.489C347.469 267.972 347.592 267.472 347.728 266.987Z" fill="black" />
        <path d="M349 281.659V303.266C348.884 303.146 348.77 303.022 348.659 302.895C347.907 302.018 347.283 301.027 346.787 299.923C345.826 297.782 345.345 295.213 345.345 292.217V292.205C345.346 290.735 345.487 289.359 345.768 288.077C345.863 287.645 345.974 287.224 346.1 286.814C346.583 285.247 347.297 283.835 348.243 282.577C348.481 282.261 348.733 281.955 349 281.659Z" fill="black" />
        <path d="M402 306.176C398.651 306.005 395.985 305.168 394 303.666V244.351H402V306.176Z" fill="black" />
        <path d="M116.965 292.291C117.064 292.486 117.151 292.61 117.211 292.683C117.275 292.762 117.312 292.787 117.316 292.789C117.316 292.789 117.319 292.792 117.334 292.797C117.355 292.802 117.425 292.82 117.565 292.82C117.656 292.82 117.726 292.815 117.78 292.81C117.89 292.581 118.088 292.064 118.262 291.093C118.424 290.192 118.791 289.329 119.324 288.577H116.174C116.368 290.368 116.662 291.564 116.965 292.291Z" fill="black" />
        <path d="M117.755 269.584C117.778 269.638 117.802 269.691 117.828 269.743C118.037 270.178 118.285 271.038 118.468 272.477H116.503C116.714 271.066 116.967 270.185 117.185 269.707C117.253 269.584 117.306 269.517 117.333 269.486C117.343 269.475 117.351 269.468 117.356 269.463L117.36 269.462L117.367 269.46L117.374 269.458C117.409 269.449 117.498 269.431 117.658 269.431L117.682 269.431C117.703 269.47 117.728 269.52 117.755 269.584Z" fill="black" />
      </svg>
    </Animator>
  </>
)

export default Logo;