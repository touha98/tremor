import React from 'react';

import { ButtonProportions, ButtonShapeTypes, ButtonWithIconProps, IconProportions } from '@common/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

const buttonProportionsAttributes: {[char: string]: ButtonProportions} = {
    xs: {
        paddingX: 'px-2.5',
        paddingY: 'py-1.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-base',
    },
    lg: {
        paddingX: 'px-4',
        paddingY: 'py-2.5',
        textSize: 'text-lg',
    },
};

const buttonShapeAttributes: ButtonShapeTypes = {
    rounded: 'rounded-lg',
    border: 'border',
    shadow: 'shadow-sm'
};

const iconProportionsAttributes: {[char: string]: IconProportions} = {
    xs: {
        margin: '-mr-0.5 ml-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-mr-1 ml-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: '-mr-1 ml-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: '-mr-1 ml-1.5',
        iconSize: 'w-6 h-6',
    },
};

const SecondaryButtonTrailingIcon = ({
    text,
    Icon,
    handleClick,
    buttonSize = 'sm'
}: ButtonWithIconProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            { ...buttonProportionsAttributes[buttonSize] }
            { ...buttonShapeAttributes }
            textColor={ 'text-blue-600' }
            bgColor={ 'bg-transparent' }
            hoverBgColor={ 'bg-blue-700' }
            hoverTextColor={ 'text-white' }
            borderColor={ 'border-blue-600' }
            hoverBorderColor={ 'border-blue-700' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
            <Icon 
                className={classNames(
                    iconProportionsAttributes[buttonSize].margin || '',
                    iconProportionsAttributes[buttonSize].iconSize || '',
                )}
                aria-hidden="true"
            />   
        </ButtonWrapper>
    );
};

export default SecondaryButtonTrailingIcon;
