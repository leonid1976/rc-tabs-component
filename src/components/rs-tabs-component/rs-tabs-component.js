import React, {useState, useEffect} from 'react';
import './rs-tabs-component.css';


const Tabs = (props) => {

	const styleType = props.style_type || 'default'; 
	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		if(styleType === 'material') {
			materialAnimationHandler(0)
		}
  }, [styleType]); 

	const tagCsl = [];
	tagCsl.push('tabs');

	switch (styleType) {

	case 'material': 
		tagCsl.push('material-style');
	break;
	case 'bootstrap': 
		tagCsl.push('bootstrap-style');
	break;
	case 'button': 
		tagCsl.push('button-style');
	break;	
	default:
		tagCsl.push('deffault-style');
	}



	const materialAnimationHandler = (index) => {
		const tabs = document.querySelector('.tabs');
		const tags = document.querySelector('.tags');
		const indicator = document.querySelector('.indicator');
		const activeTag = document.querySelector(`#tag-${index}`);
		const tagPaddingLeft = (parseFloat(window.getComputedStyle(tags).paddingLeft));
		const tabPaddingLeft = (parseFloat(window.getComputedStyle(tabs).paddingLeft));
		const leftOffset = activeTag.offsetLeft - tags.offsetLeft + tagPaddingLeft + tabPaddingLeft + tabs.offsetLeft; 
		indicator.style.left = `${leftOffset}px`;
		indicator.style.width = `${activeTag.offsetWidth}px`;
	}

  const tabClickHandle = (index) => {
    setActiveTab(index);
		if(styleType === 'material') {
			materialAnimationHandler(index);
		}
  };

	return (
		<div className={tagCsl.join(' ')}>

			<div className='tags'>
				{props.tags.map((tag, index) => {
					return (
						<div className={'tag-item ' + ((activeTab === index) ? 'active' : '')}
							key={'tag' + index}
							id={'tag-' + index}
							onClick={() => tabClickHandle(index)}
						>{tag}</div>
					)
				})}
					{styleType === 'material' ?
				 	(<span className='indicator'></span>) :
				 	''}
			</div> 

			<div className='tabs_content'>
				{props.children.map((content, index) => {
					return (
						<div className={'content-item ' + ((activeTab === index) ? 'active' : '')}
							key={'tab-content' + index}
							id={index}
						>
							{content}
						</div>	
					)
				})}
			</div>

		</div>
	);
}

export default Tabs
