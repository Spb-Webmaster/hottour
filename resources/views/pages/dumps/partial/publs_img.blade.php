<div class="hrow">
@foreach($publs as $item)
    <div class="hcol">
        <div class="pc_tree">
            <a href="{{ asset($top_category.'/'. $category->slug).'/'.  $item->slug  }}">
               @if($item->img)
                <img class="pc_category_img" width="280" height="200"
                     src="{{ asset(intervention('280x200', $item->img, 'dumps')) }}"
                     alt="{{$item->title}}">
                @else
                    <div
                        style="
                            width: 280px;
                            height: 200px;
                            background-size: 70%;
                            background-color: #EF533F;
                            background-position: 38px 30px;
                            border-radius: 12px;
                            background-repeat: no-repeat;
                            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjk2IiBoZWlnaHQ9IjQ5NiIgdmlld0JveD0iMCAwIDY5NiA0OTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAwLjY4OSAzNTAuODNDMzAwLjMwNCAzNDkuODg0IDI5OS42MyAzNDkuMDM0IDI5OC42ODQgMzQ4LjY0OUMyOTUuNzE2IDM0Ny41MSAyOTEuNjg5IDM1MC4xNzMgMjg5Ljc4IDM1Mi4xNjJDMjgzLjM2MyAzNTguNzA2IDI4Mi40IDM2OS44MjIgMjgzLjE3IDM3OC40NTFDMjg2LjA0MiA0MDguNDQ3IDMxNC4wMDUgNDI3LjA1MyAzNDEuNzc1IDQyNi4yOTlDNDI1Ljg1NiA0MjkuNTIzIDQ1NC4xMDggMzIwLjkzMSA0MDQuMDIyIDI2NC4zNThDMzk2LjA4MSAyNTUuNDM5IDM5MC40MTcgMjU0LjU3MyAzODcuMzUzIDI0Mi4yMzhDMzgwLjM1OSAyMTMuNDc4IDQxMy45NjkgMTg5LjM3IDQ0MS4wODEgMTk4Ljg2Nkw0NDIuNzAyIDE5OS40NDNMNDQ0LjE0NSAyMDAuMzg5QzQ4Mi4xNjcgMjI1LjI1MiA0OTkuNzgyIDI3MC4zNDEgNTAxLjAzNCAzMTQuMTE0QzUwMi41NzQgMzY0LjA0NyA0ODMuNjExIDQxMy44ODQgNDQ5LjkwNSA0NTAuODA5QzQyNS4xMDIgNDc4LjA0NSAzODcuNTYyIDQ5Mi4yODkgMzUxLjI3MyA0OTQuNTY2QzI5My4wNTMgNDk4LjM2OCAyMzMuODcgNDcxLjk4MiAyMTUuNzc0IDQxMy41OTZDMTk3LjQ4NSAzNTQuNjQ4IDIxOS4zMTkgMjg2LjMwMSAyNzkuNTQ0IDI2MS41MzVDMzEwLjM3OSAyNDguODE1IDM0My43IDI1Mi4zMjggMzcyLjQzMyAyNjguNTZDMzk1Ljc5MiAyODEuNjY1IDQwNS42NTggMjk5LjMwOSA0MTAuNDU1IDMyNC42NTNDNDE0Ljg2NyAzNDguMiA0MDYuNDI4IDM3MS44MjcgMzg5LjI5NCAzODguNDQ0QzM3NC42NDcgNDAyLjU5MiAzNTIuMzMxIDQxMi4yNjQgMzMyLjAzNyA0MDUuMjM5QzMxNy42NzkgNDAwLjM5NCAzMDguNzc1IDM4OC41MjUgMzA0LjU1NSAzNzQuNDlDMzAzLjAzMSAzNjkuMzU3IDMwMi4yNjEgMzY0LjA0NyAzMDEuNjg0IDM1OC43MzhDMzAxLjM5NSAzNTYuNTU3IDMwMS4yOTkgMzUzLjA0NCAzMDAuNzIxIDM1MC44NjJMMzAwLjY4OSAzNTAuODNaTTU3MS4yMDYgMTU4Ljk5TDU0NC4wMTMgMTg4LjAzOEM1MjEuOTg2IDIxMS41ODUgNDg0LjgzIDIyMC44ODkgNDYyLjE0NiAxOTIuNDAxQzQ0Ni4wNTUgMTcyLjE3NSA0NzMuMjQ3IDE0NC4wODggNDg2LjM3MSAxMjkuNjUyTDU0Ni44ODUgNjMuMjk0QzU1OS44MTUgNDkuMTQ2NiA1ODMuOTQ0IDE3LjU0NzQgNjA1LjY4MiAyNS40MjMxQzYyMC40MjYgMzAuNzMyNCA2MzMuNjQ1IDQwLjIyODIgNjM3LjU3NiA1Ni4wNzU5QzY0My4zMTkgNzkuMjM3OSA2MjUuOCAxMDMuNzMxIDYxMS40MjYgMTIwLjI1M0M1OTguNzg0IDEzNC41OTMgNTg1LjI3NiAxNDYuMzUgNTcxLjIwNiAxNTguOTlaTTQwMy4wNTkgMTA3LjkxOEMzOTkuODk5IDEyNC4zNDMgMzk3LjIyIDEzOS43MDkgMzkyLjQyMyAxNTUuOTQyQzM4Ny4yNTcgMTczLjk3MSAzNzYuOTA5IDIwNC44MzMgMzU0Ljk3OSAyMDcuOTZDMzQ0LjQzOCAyMDkuNDg0IDMzNS40MzggMjA0LjA2MyAzMjguNjUyIDE5Ni41NzJDMjcwLjQzMiAxMzIuMDI2IDMyNi41NSA2MC45MjAxIDM3MS4xNjYgOS4zODI5NUMzOTAuMTI5IC0xMi40NDc3IDQyNC4zMTYgNi42MjQwNCA0MjAuMDk3IDM3Ljc1OEM0MTYuNjQ4IDYyLjU0MDEgNDA5LjQ2MSA4NC4wODIxIDQwMy4wNTkgMTA3LjkwMlYxMDcuOTE4Wk0xNzcuNTQzIDU4LjI3MzRDMTg0LjE1MyA1My4xNDA2IDE4OS41MTEgNTMuMzMzIDE5Ny4zNzIgNTIuNjc1NEMyMDkuNzI1IDUxLjcyOSAyMjIuNDY0IDU0LjAwNjcgMjMwLjQwNSA2NC4zNTI2QzI0NS4xNDggODMuMzQ0MiAyMzEuOTI5IDEwOS4wNTcgMjM1Ljk1NiAxMjguNjFDMjM3LjAxNSAxMzMuNjQ2IDIzOS4wMiAxMzguMjk4IDI0MS40MSAxNDIuODUzQzI1My4xODYgMTY0Ljc4IDI3MC44MDEgMTc4LjkyOCAyNzUuNjk0IDIwNS4xMjFDMjc4LjI3NyAyMTguODg0IDI2OS42NjIgMjMyLjQ1NCAyNjAuMTgxIDI0MS42NjFDMjQ4LjAyIDI1My40MzQgMjIzLjYwMyAyNjYuNzE2IDIxMC4wOTQgMjQ5LjI0OEMyMDAuOTAyIDIzNy4zNzggMTk4LjcwNCAyMjQuMDk3IDE5MS4zMjQgMjEyLjAzNUMxNzcuMjU0IDE4OS4xNjEgMTY2LjkwNyAxNTcuMzU0IDE2My40NTcgMTMwLjc3NUMxNjEuMDY3IDExMS45NzYgMTU4LjI5MiA3MC41OTIzIDE3Ny41MjcgNTguMjU3NEwxNzcuNTQzIDU4LjI3MzRaTTczLjQ1NjQgMjY1LjQ5N0M5MS44NDE3IDI2OC4xNTkgMTA5LjY0OSAyNjkuODU5IDEyNy41NTMgMjc1LjY1QzE1Ni4wOTQgMjg0Ljg1NyAxNzcuMTU4IDMwMi4yMjkgMTg2LjA2MiAzMzEuNzQyQzE4OC4xNjQgMzM5LjA1NyAxODguMDY3IDM0Ni41NDggMTg0LjI0OSAzNTMuMjg0QzE3MS45OTIgMzc1LjAxOSAxMjcuODQyIDM3MS4yMTcgMTA2LjI5NiAzNzAuOTQ1Qzc3LjA4MjEgMzcwLjU2IDI4LjcyODUgMzc4LjUzMiAxMC41MzU4IDM0OS4zMDZDMS4wNTQ0MSAzMzQuMTE2IDAuNTczMTc2IDMxMi42NzEgMC42Njk0MzQgMjk1LjIwM0MwLjc2NTY5MiAyODcuODg5IDIuODY3MyAyODEuMDU1IDcuNjY0MTUgMjc1LjQ1N0MyMi4zMTE0IDI1OC40NzEgNTMuNjI3MyAyNjIuNjQxIDczLjQ1NjQgMjY1LjQ5N1pNNjE3Ljc0NiAyOTIuNDZDNjM5Ljc3MyAyODUuOTE2IDY4Ny4yNjEgMjcyLjA1NyA2OTMuNjc4IDMwNi4zMTlDNjk2LjM1NyAzMjAuOTMxIDY5NS4wMjYgMzQwLjQwNCA2ODguMTI3IDM1My42ODVDNjc0LjMzIDM4MC4xNjggNjQ4LjU4MSAzNzYuNTU5IDYyNC4xNjQgMzgxLjExNEM2MTguMzI0IDM4Mi4xNTcgNjEyLjU4MSAzODMuMjk2IDYwNi43NDEgMzg0LjMzOEM1ODEuMzYxIDM4OC44OTQgNTQ2LjYxMiAzODQuMjQyIDUzOS45MDYgMzU0LjQzOUM1MzMuOTcgMzI4LjI0NiA1NTYuMzgyIDMwOC4xMTUgNTc5LjQ1MiAzMDEuMDlDNTkxLjkwMSAyOTcuMjg4IDYwNS4xMjEgMjk2LjI0NiA2MTcuNzYzIDI5Mi40NDRMNjE3Ljc0NiAyOTIuNDZaIiBmaWxsPSIjRjU4MTFFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAwLjg4MSAzNTAuOTI2QzMwMC40OTYgMzQ5Ljk4IDI5OS44MjIgMzQ5LjEzIDI5OC44NzUgMzQ4Ljc0NUMyOTUuOTA3IDM0Ny42MDYgMjkxLjg4IDM1MC4yNjkgMjg5Ljk3MSAzNTIuMjU4QzI4My41NTQgMzU4LjgwMiAyODIuNTkyIDM2OS45MTggMjgzLjM2MiAzNzguNTQ4QzI4Ni4yMzMgNDA4LjQ0NyAzMTQuMTk2IDQyNy4xNDkgMzQxLjk2NyA0MjYuMzk1QzQyNi4wNDggNDI5LjUyMyA0NTQuMyAzMjAuOTMxIDQwNC4yMTMgMjY0LjQ1NEMzOTYuMjcyIDI1NS41MzUgMzkwLjYwOSAyNTQuNjY5IDM4Ny41NDUgMjQyLjMzNEMzODAuNTUgMjEzLjU3NCA0MTQuMTYgMTg5LjQ2NiA0NDEuMjczIDE5OC45NjJMNDQyLjg5MyAxOTkuNTM5TDQ0NC4zMzcgMjAwLjQ4NkM0ODIuMzU5IDIyNS4zNDggNDk5Ljk3NCAyNzAuNDM3IDUwMS4yMjUgMzE0LjIxQzUwMi43NjUgMzY0LjE0NCA0ODMuODAzIDQxMy44ODQgNDUwLjA5NiA0NTAuOTA1QzQyNS4yOTQgNDc4LjE0MSAzODcuNzUzIDQ5Mi4zODUgMzUxLjM2OCA0OTQuNjYyQzI5My4yNDQgNDk4LjQ2NCAyMzQuMDYyIDQ3Mi4wNzggMjE1Ljk2NSA0MTMuNjkyQzE5Ny42NzYgMzU0Ljc0NCAyMTkuNTExIDI4Ni4zMDEgMjc5LjczNiAyNjEuNjMxQzMxMC41NzEgMjQ4LjkxMSAzNDMuNzk2IDI1Mi40MjQgMzcyLjYyNSAyNjguNjU2QzM5NS44ODcgMjgxLjc2MSA0MDUuODUgMjk5LjQwNSA0MTAuNjQ3IDMyNC43NDlDNDE1LjA1OCAzNDguMjk2IDQwNi42MiAzNzEuOTIzIDM4OS40ODYgMzg4LjU0MUMzNzQuODM5IDQwMi42ODggMzUyLjUyMyA0MTIuMjY0IDMzMi4yMjkgNDA1LjMzNUMzMTcuODcgNDAwLjM5NCAzMDguOTY2IDM4OC42MjEgMzA0Ljc0NyAzNzQuNTg2QzMwMy4yMDcgMzY5LjM3MyAzMDIuNDUzIDM2NC4xNDQgMzAxLjg3NSAzNTguODM0QzMwMS41ODYgMzU2LjU1NyAzMDEuNDkgMzUzLjE0IDMwMC45MTMgMzUwLjk1OEwzMDAuODgxIDM1MC45MjZaTTU3MS4zOTcgMTU5LjA4Nkw1NDQuMjA0IDE4OC4xMzVDNTIyLjE3NyAyMTEuNjgyIDQ4NS4wMjIgMjIwLjk4NSA0NjIuMzM3IDE5Mi40OThDNDQ2LjI0NiAxNzIuMjcxIDQ3My40MzkgMTQ0LjA4OCA0ODYuNTYyIDEyOS43NDhMNTQ3LjA3NiA2My4zOTAxQzU2MC4wMDcgNDkuMjQyNyA1ODQuMTM1IDE3LjU0NzMgNjA1Ljg3NCAyNS40MjNDNjIwLjYxNyAzMC44Mjg1IDYzMy44MzcgNDAuMjI4MSA2MzcuNzY3IDU2LjE3MkM2NDMuNTEgNzkuMzM0MSA2MjUuOTkyIDEwMy43MzEgNjExLjYxNyAxMjAuMzQ5QzU5OC45NzUgMTM0LjY4OSA1ODUuNDY3IDE0Ni40NDYgNTcxLjM5NyAxNTkuMDg2Wk00MDMuMjUxIDEwOC4wMTRDMzk5Ljk5NCAxMjQuNDM5IDM5Ny40MTEgMTM5LjgwNiAzOTIuNjE0IDE1Ni4wMzhDMzg3LjQ0OCAxNzMuOTcxIDM3Ny4xMDEgMjA0LjkyOSAzNTUuMTcgMjA4LjA1N0MzNDQuNjMgMjA5LjQ4NCAzMzUuNjMgMjA0LjE1OSAzMjguODQzIDE5Ni41NzJDMjcwLjYyNCAxMzIuMDI2IDMyNi43NDIgNjEuMDE2MiAzNzEuMzU3IDkuNDc5MDZDMzkwLjMyIC0xMi40NDc5IDQyNC41MDggNi43MjAxNSA0MjAuMjg4IDM3Ljg1NDFDNDE2LjgzOSA2Mi41NCA0MDkuNTU2IDg0LjE3ODIgNDAzLjI1MSAxMDcuOTk4VjEwOC4wMTRaTTE3Ny43MzUgNTguMzY5NUMxODQuMjQ4IDUzLjE1NjUgMTg5LjcwMyA1My40MjkyIDE5Ny41NjQgNTIuNzcxNUMyMDkuOTE3IDUxLjcyODkgMjIyLjY1NSA1NC4wMDY2IDIzMC41OTYgNjQuMzUyNUMyNDUuMzQgODMuNDI0MyAyMzIuMDQgMTA5LjE1MyAyMzYuMTQ3IDEyOC43MDZDMjM3LjIwNiAxMzMuNzQyIDIzOS4xMTUgMTM4LjM5NCAyNDEuNjAyIDE0Mi45NDlDMjUzLjI4MSAxNjQuNzggMjcwLjk5MiAxNzkuMDI0IDI3NS44ODYgMjA1LjIxN0MyNzguNDY5IDIxOC45OCAyNjkuNzU3IDIzMi40NTQgMjYwLjM3MiAyNDEuNjYxQzI0OC4yMTEgMjUzLjQzNCAyMjMuNzk0IDI2Ni44MTIgMjEwLjI4NiAyNDkuMzQ0QzIwMS4wOTMgMjM3LjM3OCAxOTguODk1IDIyNC4xOTMgMTkxLjUxNiAyMTIuMTMxQzE3Ny40NDYgMTg5LjI1NyAxNjcuMDk4IDE1Ny40NSAxNjMuNjQ5IDEzMC44NzFDMTYxLjI1OCAxMTIuMDcyIDE1OC40ODMgNzAuNjg4NCAxNzcuNzE5IDU4LjM1MzVMMTc3LjczNSA1OC4zNjk1Wk03My42NDc4IDI2NS41OTNDOTIuMDMzMSAyNjguMjU1IDEwOS44NDEgMjY5Ljk1NiAxMjcuNzQ1IDI3NS42NUMxNTYuMjg1IDI4NC44NTcgMTc3LjM1IDMwMi4zMjUgMTg2LjI1MyAzMzEuODM5QzE4OC4zNTUgMzM5LjE1MyAxODguMTYzIDM0Ni42NDQgMTg0LjQ0MSAzNTMuMzgxQzE3Mi4wODggMzc1LjExNSAxMjguMDMzIDM3MS4zMTMgMTA2LjQ4OCAzNzEuMDQxQzc3LjI3MzUgMzcwLjY1NiAyOC45MiAzNzguNjI4IDEwLjcyNzIgMzQ5LjQwM0MxLjI0NTgxIDMzNC4yMTMgMC43NjQ1ODMgMzEyLjc2NyAwLjg2MDg0MSAyOTUuMjk5QzAuODYwODQxIDI4Ny45ODUgMy4wNTg3IDI4MS4wNTUgNy44NTU1NiAyNzUuNDU3QzIyLjUwMjggMjU4LjQ3MSA1My44MTg3IDI2Mi43MzcgNzMuNjQ3OCAyNjUuNTkzWk02MTcuOTM4IDI5Mi41NTZDNjM5Ljg2OSAyODYuMDEyIDY4Ny40NTIgMjcyLjE1MyA2OTMuODY5IDMwNi40MTVDNjk2LjU0OSAzMjAuOTMxIDY5NS4yMTcgMzQwLjUgNjg4LjMxOSAzNTMuNzgyQzY3NC41MjIgMzgwLjE2OCA2NDguNzczIDM3Ni42NTUgNjI0LjM1NSAzODEuMjFDNjE4LjUxNiAzODIuMjUzIDYxMi43NzIgMzgzLjM5MiA2MDYuOTMyIDM4NC40MzRDNTgxLjU1MiAzODguODk0IDU0Ni44MDMgMzg0LjMzOCA1NDAuMDAxIDM1NC41MzVDNTM0LjE2MSAzMjguMzQyIDU1Ni41NzMgMzA4LjExNSA1NzkuNjQzIDMwMS4xODZDNTkyLjA5MyAyOTcuMzg0IDYwNS4zMTIgMjk2LjM0MiA2MTcuOTU0IDI5Mi41NEw2MTcuOTM4IDI5Mi41NTZaIiBmaWxsPSIjRkVGRUZFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjY5LjI3NSAzNzkuODc4QzI4MS4xNDcgNDQ3LjI3OSAzNTkuMzg5IDQ0OC44ODMgMzk5LjQxNiA0MjAuNzk3QzQ2Mi40MzMgMzc2Ljc1MSA0NDIuNTA3IDI3NC4xNDIgNDAzLjYzNSAyNDQuNzA4QzM5MS44NiAyMjIuOTczIDQxOS43MjYgMjA2LjI1OSA0MzYuNTcxIDIxMi4xNDZDNDk5Ljg2MSAyNTMuNTMgNTA2Ljk1MiAzNjcuNTQzIDQzOS41MzkgNDQxLjQ4OUMzODUuNzE1IDUwMC40MzYgMjU2LjM2MSA0OTYuMTcgMjI5LjQ0MSA0MDkuNTA1QzIwMC4wNSAzMTQuNjc1IDI4Ni4zMjkgMjM2LjE3NCAzNjUuNjEzIDI4MC43ODJDMzg4LjMxNCAyOTMuNTk4IDM5My41NzYgMzEwLjg3NCAzOTYuNjQxIDMyNy4yOTlDNDA2LjY5OSAzODEuMDMzIDMzMy4xNTggNDIwLjYwNCAzMTguMzAzIDM3MC41OTFDMzE1LjQzMSAzNjAuNzI2IDMxNS45MTIgMzUwLjE4OCAzMTQuMDgzIDM0NS45MDVDMzA0LjY5OCAzMjIuOTM2IDI2MS4zMTggMzM1LjE3NCAyNjkuMjc1IDM3OS44OTRWMzc5Ljg3OFoiIGZpbGw9IiNGNTgxMUUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OTYuOTkgMTM5LjI0NEw1NTcuNjAxIDcyLjc4OTVDNTY4Ljg5NSA2MC4zNTg0IDU4OS45NTkgMzQuNjI5OSA2MDAuOTgxIDM4LjcwNDFDNjY2LjAwMyA2Mi4zNDczIDU3OC40NzMgMTMzLjgyMiA1NjEuNDM1IDE0OS4xMDlMNTMzLjg1NyAxNzguNTQyQzUxMy44MzUgMTk5LjkwOCA0ODcuODk0IDIwMS44OTcgNDczLjUzNiAxODMuNzU1QzQ2NS45NjMgMTc0LjM1NiA0ODIuMzQzIDE1NS4yODQgNDk2Ljk5IDEzOS4yNDRaIiBmaWxsPSIjOEREN0Y3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDA2LjIwNCAzNS45NjA3QzQwMi40NjYgNjIuNzMxOCAzOTYuMDQ5IDc5LjkxMDggMzg5LjM0MyAxMDQuNzczQzM4OC42NjkgMTA3LjUzMiAzNzIuMDE3IDIyMy4zMjYgMzM5LjQ0OSAxODcuMjY4QzI4Ny4zNTggMTI5LjQ1OSAzNDMuMTg3IDYzLjU4MTkgMzgyLjA1OSAxOC42ODU1QzM5MC43NzEgOC42MjgyNiA0MDguNzcxIDE2Ljg4OSA0MDYuMTg4IDM1Ljk2MDdINDA2LjIwNFoiIGZpbGw9IiMwMEE1NTAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODUuOTY0IDY5Ljg1MzdDMTg5Ljc5OCA2Ni41MzM0IDE5NC4zODYgNjcuMDk0OCAxOTguNzAyIDY2LjgyMjFDMjM4LjcyOSA2My41MDE4IDIxNi44OTUgMTA2LjAyNCAyMjIuMjUzIDEzMS41NkMyMjguMzgxIDE2MC44OTggMjU2LjUzNyAxNzkuMDIzIDI2MS45OTEgMjA3Ljc4M0MyNjUuMTUyIDIyNS4xNTUgMjMwLjY3NiAyNTIuNTgzIDIyMS41NzkgMjQwLjgxQzIxMy41NDIgMjMwLjM2OCAyMTAuNzY2IDIxNi41MDkgMjAzLjU3OSAyMDQuODMyQzE5MC40NTYgMTgzLjQ2NiAxODAuNzgyIDE1My4xMDIgMTc3LjcxOCAxMjkuMDlDMTczLjc4NyA5OC42MTM4IDE3Ny41MjUgNzQuMzEyOSAxODUuOTQ4IDY5Ljg1MzdIMTg1Ljk2NFoiIGZpbGw9IiNGRkYxMDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MS41MzAzIDI3OS40MzVDMTA0Ljg1MiAyODQuMjc5IDE1Ny45MDYgMjg2Ljc0OSAxNzIuNTUzIDMzNS44MTZDMTc5LjY0NCAzNTkuMjY3IDE0MC4zNzEgMzU3LjM1OCAxMDYuNTY4IDM1Ni45ODlDODYuMTc3NSAzNTYuNyAzNi4yODM4IDM2My43MjYgMjIuNzc1NiAzNDEuOTkxQzE0LjgzNDMgMzI5LjE3NSAxNC45MzA3IDMwNy4yNDggMTUuMDI2OSAyOTUuMzc5QzE1LjIxOTQgMjczLjc0IDQzLjk1MjQgMjc1LjQ0MSA3MS41MzAzIDI3OS40MzVaIiBmaWxsPSIjMDBBREVGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjIxLjk0OCAzMDYuMDE0QzYwNy45NzUgMzEwLjE4NCA1OTQuNzU2IDMxMS4yMjcgNTgzLjczNCAzMTQuNTYzQzUzNy4zODYgMzI4LjYxNCA1NDMuODAzIDM4MS4zODcgNjA0LjQxMyAzNzAuNTc2QzYxMC4xNTcgMzY5LjUzMyA2MTUuOTk2IDM2OC4zOTQgNjIxLjc0IDM2Ny4zNTFDNjQxLjc0NSAzNjMuNjQ2IDY2NS41MDUgMzY2Ljg3IDY3NS42NDQgMzQ3LjMxN0M2ODEuNzczIDMzNS42NCA2ODEuNjc2IDMxOC4zNjUgNjc5Ljg2NCAzMDguOTY1QzY3Ni43MDMgMjkxLjc4NiA2NDguNTQ4IDI5OC4wNDIgNjIxLjkzMiAzMDYuMDNMNjIxLjk0OCAzMDYuMDE0WiIgZmlsbD0iI0M2NTZBMCIvPgo8L3N2Zz4K');"
                         ></div>
                @endif
            <h3>{{$item->title}}</h3>
            <div class="hcolNoImg__smalltext colorGrey">
                {!! $item->smalltext !!}
            </div>
            </a>
        </div>
    </div>
@endforeach
{{ $publs->withQueryString()->links('pagination::default') }}
</div>
