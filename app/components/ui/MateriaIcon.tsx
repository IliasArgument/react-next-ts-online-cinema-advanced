import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from '@/shared/types/icon.types';
import { useRenderClient } from '@/hooks/useRenderClient';

const Materialcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
    const { isRenderClient } = useRenderClient()
    const IconComponent = MaterialIcons[name]
    if (isRenderClient) {
        return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
    } else return null
};

export default Materialcon;