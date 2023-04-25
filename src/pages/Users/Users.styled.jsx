import styled from 'styled-components';

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-inline: 24px;
  padding-bottom: 24px;
`;

export const PageTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  border-bottom: 1px solid #888;
`;
