import React from "react";
import styled from "styled-components/macro";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";
import { COLORS } from "../../constants";

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

    return (
        <Link href={`/shoe/${slug}`}>
            <Wrapper>
                <ImageWrapper>
                    <Image alt="" src={imageSrc} />
                    {variant === "on-sale" && <OnSaleBadge>Sale</OnSaleBadge>}
                    {variant === "new-release" && (
                        <NewReleaseBadge>Just Released!</NewReleaseBadge>
                    )}
                </ImageWrapper>
                <Spacer size={12} />
                <Row>
                    <Name>{name}</Name>
                    <Price style={priceStyles[variant]}>
                        {formatPrice(price)}
                    </Price>
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

const priceStyles = {
    "on-sale": {
        "--color": COLORS.gray[700],
        "--decoration": "line-through",
    },
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
    color: ${(p) => p.theme.colors.gray[900]};
`;

const Name = styled.h3`
    font-size: 1rem;
    font-weight: ${(p) => p.theme.weights.medium};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${Link}:hover & {
        text-decoration: underline;
    }
`;

const Price = styled.span`
    color: var(--color);
    text-decoration: var(--decoration);
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
    line-height: ${32 / 16}rem;
    font-weight: ${(p) => p.theme.weights.bold};
    color: white;
    padding: 0 10px;
    border-radius: 2px;
`;

const OnSaleBadge = styled(Badge)`
    background-color: ${(p) => p.theme.colors.primary};
`;

const NewReleaseBadge = styled(Badge)`
    background-color: ${(p) => p.theme.colors.secondary};
`;

export default ShoeCard;
