export  const LogoContainer = ({href, svg, figCaption}) =>{


    return(
        <a href={href}>
        <figure>
          {svg}
          <figcaption>{figCaption}</figcaption>
        </figure>
      </a>
    )
}