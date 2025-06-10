import { Search } from "lucide-react";
import styled from "styled-components";

export default function SearchBar(){
    return (
       <Container>
        <SearchWrapper>
          <SearchInput 
            type="text" 
            placeholder="가이드 검색창" 
          />
          <SearchIcon size={20} />
        </SearchWrapper>
       </Container>
    );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 325px;
  height: 44px;
  border-radius: 9999px;
  border: 1px solid #80ABEF;
  padding-left: 2.5rem;
  padding-right: 1rem;
  color: #80ABEF;
  margin-right: 9rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #80ABEF;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #80ABEF;
`;

