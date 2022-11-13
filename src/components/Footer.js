import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 32px;
  gap: 16px;

  display: flex;
  flex-direction: column;

  .img-favorites {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
  }
  a {
    img {
      height: 80px;
      border-radius: 50%;
    }
  }
  span {
    font-size: 12px;
  }
`

export default function Footer(props) {
  const listFavorites = props.favorites

  return (
    <>
      <StyledFooter>
        <h2>Favoritos</h2>
        <div style={{ display: 'flex', gap: 16 }}>
          {listFavorites.map(favorite => {
            return (
              <div className="img-favorites">
                <a
                  href={`https://www.github.com/${favorite.github}`}
                  target="_blank"
                >
                  <img
                    src={`https://www.github.com/${favorite.github}.png`}
                    alt=""
                  />
                </a>
                <span>{`@${favorite.github}`}</span>
              </div>
            )
          })}
        </div>
      </StyledFooter>
    </>
  )
}
