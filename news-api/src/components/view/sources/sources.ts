import { ISourceItem } from '../../../typeDeclarations/interfaces';
import './sources.css';

class Sources {
    public draw(data: ISourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItem = sourceClone.querySelector('.source__item');
            const sourceItemName = sourceClone.querySelector('.source__item-name');

            if (sourceItem instanceof HTMLElement && sourceItemName instanceof HTMLElement) {
                sourceItem.setAttribute('data-source-id', item.id !== null ? item.id : '');
                sourceItemName.textContent = item.name;

                fragment.appendChild(sourceClone);
            } else {
                throw new Error('Element is not found.');
            }
        });

        const sources = document.querySelector('.sources');
        if (sources instanceof HTMLElement) sources.append(fragment);
    }
}

export default Sources;
