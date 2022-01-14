import { gql } from "@apollo/client";

const USERLOGIN_QUERY = gql`
  query queryLoginUser($username: String, $password: String) 
  {
    queryLoginUser(username: $username, password: $password) {
      detail
      success
      admin
    }
  }
`;

export { USERLOGIN_QUERY };
