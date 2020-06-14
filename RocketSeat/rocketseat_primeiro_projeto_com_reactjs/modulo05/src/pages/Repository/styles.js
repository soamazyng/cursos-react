import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`

  display: flex;
  flex-direction: column;
  align-items: center;

  a{
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;

    &:hover{
      text-decoration: underline
    }
  }

  img{
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1{
    font-size: 24px;
    margin-top: 10px;
  }

  p{
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

`;

export const FilterList = styled.div`

  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

export const ButtonFilter = styled.button.attrs(props => ({
  actived: props.actived
}))`

  background-color:#ffffff;
  border-radius:6px;
  border:1px solid #dcdcdc;
  cursor:pointer;
  color:#666666;
  font-size:12px;
  padding:6px 6px;
  text-decoration:none;
  text-shadow:0px 1px 0px #ffffff;
  margin-left: 10px;

  ${({ actived }) => actived && `
      background-color: #ccc;
  `}

`

export const Pagination = styled.div`

  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

export const PageButton = styled.button.attrs(props => ({
  disabled: props.loadingButton
}))`

  background-color:#ffffff;
  border-radius:6px;
  border:1px solid #dcdcdc;
  cursor:pointer;
  color:#666666;
  font-size:16px;
  padding:6px 6px;
  text-decoration:none;
  text-shadow:0px 1px 0px #ffffff;
  margin-left: 10px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

`

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top:30px;
  border-top: 1px solid #eee;

  li{
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div{
      flex: 1;
      margin-left: 15px;

        strong{
          font-size: 16px;

          a{
          text-decoration: none;
          color: #333;

            &:hover{
              color: #7159c1;
              text-decoration: underline
            }
          }

          span{
            background: #eee;
            color: #333;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 600;
            height: 20px;
            padding: 3px 4px;
            margin-left: 10px;
          }

        }

        p{
          margin-top: 5px;
          font-size: 12px;
          color: #999;
        }

    }
  }
`;
