import styled from 'styled-components'

const ImgBanner = styled.div`
  height: 230px;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80');
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

export default function Banner() {
  return (
    <>
      <ImgBanner/>
    </>
  )
}
