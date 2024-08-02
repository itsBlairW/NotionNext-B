/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // 底色
    body{
        background-color: #f5f5f5
    }
    .dark body{
        background-color: black;
    }
  
    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#928CEE, #928CEE);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: #928CEE;
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-hexo .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

    // 选中字体颜色
    ::selection {
        background: rgba(45, 170, 219, 0.3);
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: #49b1f5 transparent
    }
    
    .slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 20px auto;
    max-width: 98%; /* 根据需要设置最大宽度 */
    border: 2px solid #ccc; /* 添加边框 */
    border-radius: 8px; /* 圆角边框 */
    padding: 10px; /* 添加内边距 */
    background-color: #fff; /* 背景色 */
    flex-direction: column; /* 纵向排列 */
    }

    .slider-text {
    text-align: center; /* 文本居中 */
    margin-bottom: 10px; /* 文本与图片之间的间距 */
    }

    .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .slider-image-container {
    width: 400px; /* 设置固定宽度 */
    height: 300px; /* 设置固定高度 */
    }

    .slider-image {
    width: 100%; /* 填充宽度 */
    height: 100%; /* 填充高度 */
    object-fit: contain;
    }

    button {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0px;
    }

    button:hover {
    opacity: 0.7;
    }

    @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px); /* 向下滑入 */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards; /* 这里可以调整持续时间 */
    }

    .image-slider img {
    transition: transform 0.3s ease; /* 添加平滑过渡效果 */
    }

    .image-slider img:hover {
    transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
    }






  `}</style>)
}

export { Style }
