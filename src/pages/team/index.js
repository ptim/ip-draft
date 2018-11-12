import React from 'react'
import dedent from 'dedent'
import Helmet from 'react-helmet'

import DefaultTemplateWrapper from '../../layouts/DefaultTemplateWrapper'


const Team = () => (
  <DefaultTemplateWrapper>
    <div className="Team">
      <Helmet
        title="Team - The Interplay Project"
        meta={[
          { name: 'description',
            content: dedent`
              Meet the Interplay Team who have worked together in a 'shared space'
              collaboration to build the Interplay Wellbeing Framework.
            `,
          },
        ]}
      />

      <div className="slab slab--blue">
        <div className="container">
          <h1 className="underline">Who We Are</h1>
        </div>
      </div>

      <div className="slab">
        <div className="container">
          <h2>Sheree Cairney</h2>

          <p>
            Sheree Cairney is a Neuroscientist who has spent two decades leading research and innovation projects in Aboriginal communities in the most remote regions across Australia. Her research has shed light on the transformation of brain and behaviour that happens-with petrol sniffing, alcohol and other drugs - and led to ground-breaking clinical evidence the brain can repair itself if substance abuse stops early enough. Currently an Associate Professor at Flinders University, she has published over 50 scientific articles, and produced creative and digital learning tools, and psychosocial screening instruments that are used across the country.
          </p>
          <p>
            Her science and innovation stories have been told on national media, and informed policy, education curriculum, rehabilitation programs and national clinical guidelines. She has led ‘The Interplay Project’ for 7 years with the aim of developing an Aboriginal wellbeing framework from the ground up to represent Aboriginal cultural values to policy.
          </p>
          <p>
            Sheree is passionate about bringing together people and ideas to inspire and create change through integrating science, culture, art, business and policy.
          </p>


          <h2>Tammy Abbott</h2>

          <p>
            Tammy Abbott is of the Western Arrernte and Luritja/Pintupi people of Central Australia and was educated in Alice Springs and Victoria. Tammy has spent 24 years working to improve the educational, financial and wellbeing outcomes of Aboriginal people. In the first 7 years, she worked in bilingual education with Aboriginal kids in the classroom.
          </p>
          <p>
            For the last 14 years, she has worked in engagement and culture brokerage roles with remote Aboriginal communities, Australian Governments and Academics. Tammy is currently working as the Senior Research Officer for Ninti One, which aims to strengthen and grow community-based research and evaluation activity and employment of Aboriginal Community Researchers. She has had a foundational role in the Interplay project through co-design and community engagement since 2012.
          </p>


          <h2>Jessica Yamaguchi</h2>

          <p>
            Jessica Yamaguchi is a Gangalidda and Waanyi woman from the Gulf of Carpentaria, Queensland. Jessica has worked as a key research partner on the Interplay research project for over 4 years, through her role in the Indigenous Affairs Information and Evaluation Branch in the Department of the Prime Minister and Cabinet. Jessica has over 16 years experience working in the Australian Public Service in various roles relating to Indigenous policy and program design, service provision, evaluation, research and analysis.
          </p>


          <h2>Byron Wilson</h2>

          <p>
            Byron Wilson is a PhD student through Menzies School of Health Research & Charles Darwin University. He is a science teacher with over 10 years experience, including 6 years as Science Coordinator. Over the last 4 years Byron has conducted research focussing on remote contexts, particularly in the Northern Territory of Australia. A recurring theme in his work is the importance of looking at the holistic nature of education. He is also interested in a systems based approach to wellbeing.
          </p>
          <p>
            His recent analysis based on The Interplay Wellbeing Framework empowers Aboriginal and Torres Strait Islander knowledge systems and their accompanying beliefs. Understanding the interface between culture and empowerment on the context of education in remote communities has also been a key focus.
          </p>
          <p>
            Byron is experienced in multilevel mixed modelling, structural equation modelling and assessing goodness-of-fit in binary regression models.
          </p>

        </div>
      </div>

    </div>
  </DefaultTemplateWrapper>
)

export default Team
