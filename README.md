# cycloid-composition-preview-playground

Throwaway playground for trying Cycloid **composition pull request previews** end to end against a real GitHub repository.

The `shop` composition has six components, each mapped to a folder:

| Component | Folder | Kind |
|---|---|---|
| web | `apps/web` | built (image `ghcr.io/robertparkin/web`) |
| api | `apps/api` | built (image `ghcr.io/robertparkin/api`) |
| worker | `apps/worker` | built (image `ghcr.io/robertparkin/worker`) |
| admin | `apps/admin` | built (image `ghcr.io/robertparkin/admin`) |
| db | `apps/db` | stateful, no build |
| cache | `apps/cache` | stateful, no build |

A pull request that changes files under a component's folder gives that component a PR build in the preview; the others keep the staging build. Nothing here is deployed anywhere real: the deploy actions are synthetic.
