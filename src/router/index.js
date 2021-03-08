import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import PathNotFound from '../views/PathNotFound.vue'


const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Portfolio - Titouan Pellerin",
      metaTags: [{
          name: 'description',
          content: 'Étudiant en deuxième année de DUT Métiers du Multimédia et de l\'Internet à la recherche d\'une alternance dans les domaines de la conception et du développement web et mobile pour 2021/2022.'
        },
        {
          property: 'og:description',
          content: 'Étudiant en deuxième année de DUT Métiers du Multimédia et de l\'Internet à la recherche d\'une alternance dans les domaines de la conception et du développement web et mobile pour 2021/2022.'
        }
      ]
    }

  },
  {
    path: '/works',
    name: 'Works',
    component: () => import( /* webpackChunkName: "works" */ '../views/Works.vue'),
    meta: {
      title: "Créations - Titouan Pellerin",
      metaTags: [{
          name: 'description',
          content: 'Retrouvez ici toutes mes créations : photographies, vidéos, sites internet, applications.'
        },
        {
          property: 'og:description',
          content: 'Retrouvez ici toutes mes créations : photographies, vidéos, sites internet, applications.'
        }
      ]
    }
  }, {
    path: '/works/:slug',
    name: 'Work',
    component: () => import( /* webpackChunkName: "work" */ '../views/Work.vue'),
    props: true,
    meta: {
      title: 'Créations - Titouan Pellerin',
      metaTags: [{
          name: 'description',
          content: 'Retrouvez ici toutes mes créations : photographies, vidéos, sites internet, applications.'
        },
        {
          property: 'og:description',
          content: 'Retrouvez ici toutes mes créations : photographies, vidéos, sites internet, applications.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: "Contact - Titouan Pellerin",
      metaTags: [{
          name: 'description',
          content: 'N\'hésitez pas à me contacter si vous avez la moindre question ou proposition.'
        },
        {
          property: 'og:description',
          content: 'N\'hésitez pas à me contacter si vous avez la moindre question ou proposition.'
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: PathNotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router