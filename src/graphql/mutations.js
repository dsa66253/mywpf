import { gql } from '@apollo/client';
const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $username:String
        $email:String
        $password:String
    ){
        createUser(
            username:$username
            email:$email
            password:$password
            ){
            username
            success
            detail
        }
    }
`

export{CREATE_USER_MUTATION}