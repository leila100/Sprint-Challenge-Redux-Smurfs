import styled from "styled-components"

export const SmurfsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SmurfsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 40px auto;
  font-family: "Playfair Display", serif;
`

export const SmurfWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  margin: 5px auto;
  border-bottom: 1px solid #8dbfb7;
  border-left: 1px solid #8dbfb7;
  padding: 10px;
`

export const SmurfInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  width: 100%;
  line-height: 1.7;

  span {
    font-weight: bold;
    margin-right: 10px;
  }
`
