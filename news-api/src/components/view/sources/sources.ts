import { SourceItem } from '../../../types/types';
import './sources.css';

class Sources {
    draw(data: SourceItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;

            sourceItem.setAttribute('data-source-id', item.id);
            sourceItemName.textContent = item.name;

            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        if (sources instanceof HTMLElement) sources.append(fragment);
    }
}

export default Sources;
