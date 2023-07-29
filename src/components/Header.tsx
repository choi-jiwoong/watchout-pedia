import React from 'react';
import styled from '@emotion/styled';

const Base = styled.header``;

const Navation = styled.nav``;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul``;

const Menu = styled.li``;

const MenuButton = styled.button``;

const SearchMenu = styled.li``;

const Link = styled.a``;

const TextLogo = styled.h1``;

const SearchContainer = styled.div``;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label``;

const SearchInput = styled.input``;

const SigninButton = styled.button``;

const SignUpButton = styled.button``;



const Header: React.FC = () => {
    return (
        
        <Base>
            <Navation>
                <MenuListWrapper>
                    <MenuList>
                        <Menu>
                            <Link href="/">
                                <TextLogo>


                                </TextLogo>

                            </Link>
                        </Menu>
                    </MenuList>
                </MenuListWrapper>
            </Navation>
        </Base>
        
    )
}

export default Header;