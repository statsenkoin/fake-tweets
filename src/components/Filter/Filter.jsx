import { Select, Wrapper, Icon } from './Filter.styled';

export function Filter({ filterOption }) {
  const handleOption = e => filterOption(e.target.value);
  return (
    <Wrapper>
      <Select name="followers" onChange={handleOption} defaultValue="all">
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Select>
      <Icon />
    </Wrapper>
  );
}
