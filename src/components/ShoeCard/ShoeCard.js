import React from "react";
import styled from "styled-components/macro";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
    slug,
    name,
    imageSrc,
    price,
    salePrice,
    releaseDate,
    numOfColors,
}) => {
    // There are 3 variants possible, based on the props:
    //   - new-release
    //   - on-sale
    //   - default
    //
    // Any shoe released in the last month will be considered
    // `new-release`. Any shoe with a `salePrice` will be
    // on-sale. In theory, it is possible for a shoe to be
    // both on-sale and new-release, but in this case, `on-sale`
    // will triumph and be the variant used.
    // prettier-ignore
    const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

    const RegularPrice = variant === "on-sale" ? DiscountedPrice : Price;
    return (
        <Link href={`/shoe/${slug}`}>
            <Wrapper>
                <ImageWrapper>
                    <Image alt="" src={imageSrc} />
                    {variant !== "default" && (
                        <Badge variant={variant}>{labels[variant]}</Badge>
                    )}
                </ImageWrapper>
                <Spacer size={12} />
                <Row>
                    <Name>{name}</Name>
                    <RegularPrice>{formatPrice(price)}</RegularPrice>
                </Row>
                <Row>
                    <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
                    {variant === "on-sale" && (
                        <SalePrice>{formatPrice(salePrice)}</SalePrice>
                    )}
                </Row>
            </Wrapper>
        </Link>
    );
};

const labels = {
    "on-sale": "Sale",
    "new-release": "Just Released!",
};

const Link = styled.a`
    text-decoration: none;
    outline-offset: 8px;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1ch;
`;

const Name = styled.h3`
    font-size: 1rem;
    font-weight: ${(p) => p.theme.weights.medium};
    color: ${(p) => p.theme.colors.gray[900]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DiscountedPrice = styled.span`
    color: ${(p) => p.theme.colors.gray[700]};
    text-decoration: line-through;
`;

const Price = styled.span`
    color: ${(p) => p.theme.colors.gray[900]};
`;

const ColorInfo = styled.p`
    color: ${(p) => p.theme.colors.gray[700]};
`;

const SalePrice = styled.span`
    color: ${(p) => p.theme.colors.primary};
    font-weight: ${(p) => p.theme.weights.medium};
`;

const Badge = styled.div`
    position: absolute;
    top: 12px;
    right: -4px;
    font-size: ${14 / 16}rem;
    font-weight: ${(p) => p.theme.weights.bold};
    color: white;
    padding: 8px 12px;
    border-radius: 2px;
    background-color: ${(p) =>
        p.variant === "on-sale"
            ? p.theme.colors.primary
            : p.theme.colors.secondary};
`;

export default ShoeCard;
