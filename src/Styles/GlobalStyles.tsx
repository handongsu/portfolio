import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

@font-face {
    font-family: 'SejonghospitalBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'SejonghospitalLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalLight.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
@font-face{
font-family:'DNFBitBitv2';
font-style:normal;font-weight:400;src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')}

@font-face {
     font-family: 'DungGeunMo';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html,body {
		scroll-behavior:smooth;
		height:100%;
	}

    body {
    box-sizing: border-box;
		font-family: 'SejonghospitalBold';
		background: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
		transition: all 0.25s linear;
	}

	a {
		text-decoration:none;
		color: ${({ theme }) => theme.textColor};
	}

	li {
		list-style:none;
	}

	button {
		outline:none;
		border:none;
		color: ${({ theme }) => theme.textColor};
		background-color: transparent;
	}
`;

export default GlobalStyle;
