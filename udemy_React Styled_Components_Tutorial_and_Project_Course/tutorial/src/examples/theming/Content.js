import React from "react";
import styled from "styled-components";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        vulputate leo. Nulla nunc mi, tincidunt a urna vel, pharetra feugiat
        augue. Duis mollis ultrices erat, ac mollis mi placerat ut. Aliquam quis
        metus vitae lacus bibendum bibendum. Morbi sodales ut eros et pulvinar.
        Sed a mattis lorem. Vivamus dictum dictum nibh, nec venenatis velit
        egestas ut. Mauris blandit enim ex, a sodales tortor egestas ut. Cras
        sed tristique mi.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  background: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
`;
